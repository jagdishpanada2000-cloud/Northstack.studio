import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        color: "#F5F5F5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.04em" }}>WebsCraft</div>
      <div style={{ fontSize: 28, color: "#A3A3A3", marginTop: 18 }}>
        AI Product Development Studio
      </div>
      <div
        style={{
          fontSize: 20,
          color: "#2563EB",
          marginTop: 50,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 30,
        }}
      >
        webscraft.in
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
