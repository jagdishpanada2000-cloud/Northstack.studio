import Spline from "@splinetool/react-spline/next";

export function SplineBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block opacity-70"
    >
      <Spline scene="https://prod.spline.design/im6U6ygJ5ZbixRW7/scene.splinecode" />
    </div>
  );
}
