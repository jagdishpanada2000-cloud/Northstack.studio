import Spline from "@splinetool/react-spline/next";

export function SplineBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block opacity-60"
    >
      <Spline scene="https://prod.spline.design/im6U6ygJ5ZbixRW7/scene.splinecode" />
    </div>
  );
}
