import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
      }}
    >
      <img
        src="https://webscraft.in/og-banner.png"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>,
    { width: 1200, height: 630 },
  );
}
