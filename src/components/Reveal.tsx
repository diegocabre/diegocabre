"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        // Con scroll rápido llegan varias entradas en un lote; también mostramos lo que ya quedó arriba.
        if (!entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) return;
        el.dataset.visible = "";
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--d": delay } as React.CSSProperties}>
      {children}
    </div>
  );
}
