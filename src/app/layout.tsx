import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Cabré | Desarrollador Fullstack",
  description: "Portafolio profesional de Diego Cabré, desarrollador web frontend y backend. Diseñando y codificando experiencias digitales de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
