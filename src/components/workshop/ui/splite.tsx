"use client";

import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/** Lightweight fallback shown while 3D loads, when WebGL is unavailable,
 *  when the user prefers reduced motion, or when the scene fails to load.
 *  Renders a solid black field so the robot area stays dark when the
 *  scene cannot be shown. */
function SplineFallback({ reason }: { reason?: string }) {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center" aria-hidden="true">
      <span className="text-[10px] font-mono tracking-wider text-neutral-500 select-none">
        {reason}
      </span>
    </div>
  );
}

function webglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Catches errors thrown by the Spline runtime (e.g. scene fetch failure)
 *  so the rest of the page keeps working and we can show the fallback. */
class SplineErrorBoundary extends Component<
  { children: ReactNode; onError: () => void; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// The Spline runtime logs a benign "Missing property" console.error when its
// scene code references a timeline/audio/url property that isn't in the .splinecode.
// It doesn't affect rendering, so we swallow only that exact warning.
function suppressSplineNoise() {
  const original = console.error;
  console.error = (...args: unknown[]) => {
    const first =
      typeof args[0] === "string" ? args[0] : args[0] instanceof Error ? args[0].message : "";
    if (first.includes("Missing property")) return;
    original.apply(console, args);
  };
  return () => {
    console.error = original;
  };
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldMount, setShouldMount] = useState(false);
  const [inView, setInView] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loadTimedOut, setLoadTimedOut] = useState(false);
  const [fallbackReason, setFallbackReason] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<{ stop: () => void; play: () => void } | null>(null);
  const reduceMotion = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);

  // Mount the heavy 3D runtime shortly after first paint. We race
  // requestIdleCallback against a hard timeout so the scene is guaranteed
  // to start on busy mobile devices. We also install a console filter that
  // swallows the Spline runtime's benign "Missing property" warning.
  useEffect(() => {
    const restore = suppressSplineNoise();

    let id: number | undefined;
    let timed = false;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const timer = window.setTimeout(() => {
      timed = true;
      setShouldMount(true);
    }, 600);

    if (typeof win.requestIdleCallback === "function") {
      id = win.requestIdleCallback(
        () => {
          if (!timed) setShouldMount(true);
        },
        { timeout: 2000 },
      );
    }

    return () => {
      window.clearTimeout(timer);
      if (id !== undefined) win.cancelIdleCallback?.(id);
      restore();
    };
  }, []);

  useEffect(() => {
    if (webgl === null) {
      setWebgl(webglAvailable());
    }
  }, [webgl]);

  // Pause rendering when the scene scrolls off-screen (kept mounted once loaded).
  useEffect(() => {
    const el = containerRef.current;
    if (!el || webgl !== true) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setInView(visible);
        if (!visible) appRef.current?.stop();
        else appRef.current?.play();
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [webgl]);

  // If the scene takes too long on a slow connection, remount it a couple of
  // times (each retry restarts the load). Only after retries are exhausted do
  // we give up and show the black fallback. Once loaded we never swap it out.
  useEffect(() => {
    if (!shouldMount || loaded) return;
    const t = window.setTimeout(() => {
      if (retryCount < 2) {
        setLoaded(false);
        setLoadTimedOut(false);
        setLoadFailed(false);
        setRetryCount((c) => c + 1);
      } else {
        setLoadTimedOut(true);
      }
    }, 9000);
    return () => window.clearTimeout(t);
  }, [shouldMount, loaded, retryCount]);

  useEffect(() => {
    if (webgl === false && fallbackReason !== "no-webgl") setFallbackReason("no-webgl");
    else if (loadTimedOut && fallbackReason !== "no-webgl") setFallbackReason("timeout");
    else if (loadFailed && retryCount >= 2 && fallbackReason === "")
      setFallbackReason("load-failed");
  }, [webgl, loadTimedOut, loadFailed, retryCount, fallbackReason]);

  const showFallback = webgl === false || (loadFailed && retryCount >= 2) || loadTimedOut;
  // Once loaded, keep the scene mounted even when it scrolls off-screen;
  // we just pause rendering instead of unmounting it.
  const mount = shouldMount && (inView || loaded) && !showFallback;

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label="Interactive 3D illustration of a robot assistant"
    >
      {mount ? (
        <Suspense fallback={<SplineFallback reason={fallbackReason} />}>
          <SplineErrorBoundary
            onError={() => {
              setLoadFailed(true);
              setFallbackReason((r) => (r === "" ? "load-failed" : r));
            }}
            fallback={<SplineFallback reason={fallbackReason} />}
          >
            <Spline
              key={retryCount}
              scene={scene}
              className="w-full h-full"
              renderOnDemand={false}
              onLoad={(app) => {
                appRef.current = app;
                if (reduceMotion) app.stop();
                setLoaded(true);
                setLoadFailed(false);
              }}
            >
              <SplineFallback reason={fallbackReason} />
            </Spline>
          </SplineErrorBoundary>
        </Suspense>
      ) : (
        <SplineFallback reason={fallbackReason} />
      )}
    </div>
  );
}
