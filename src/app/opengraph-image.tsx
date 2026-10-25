import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#14171c",
          color: "#eef0f3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28, color: "#9aa3ae" }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <path d="M10 30V20q0-8 8-8h11" fill="none" stroke="#eef0f3" strokeWidth="4" strokeLinecap="round" />
            <circle cx="10" cy="30" r="5.5" fill="#eef0f3" />
            <circle cx="30" cy="12" r="5.5" fill="#5ee0a0" />
          </svg>
          Disponible para trabajar
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>{site.name}</div>
          <div style={{ fontSize: 56, color: "#9aa3ae", letterSpacing: -2 }}>{site.role}</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5ee0a0" }}>{site.motto}</div>
      </div>
    ),
    size,
  );
}
