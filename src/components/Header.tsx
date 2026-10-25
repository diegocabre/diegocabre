"use client";

import { useEffect, useState } from "react";
import { PiGithubLogo, PiMoon, PiSun } from "react-icons/pi";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

const links = [
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of [{ id: "inicio" }, ...links]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const d = document.documentElement;
    const next = d.dataset.theme === "dark" ? "light" : "dark";
    d.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label={`${site.name}, ir al inicio`} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo />
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav aria-label="Secciones" className="flex items-center sm:gap-2">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className="relative rounded-[10px] px-1.5 py-2 text-[13px] whitespace-nowrap text-muted transition-colors duration-200 hover:text-fg aria-[current]:text-fg sm:px-3 sm:text-sm"
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute inset-x-1.5 -bottom-px h-0.5 origin-left rounded-full bg-accent neon transition-transform duration-200 ease-out sm:inset-x-3 ${
                  active === l.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Diego Cabré"
            className="hidden rounded-[10px] p-2 text-muted transition-colors hover:text-fg sm:inline-flex"
          >
            <PiGithubLogo className="size-5" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar entre tema claro y oscuro"
            className="inline-flex rounded-[10px] p-2 text-muted transition-[color,transform] duration-150 hover:text-fg active:scale-95"
          >
            <PiSun className="hidden size-5 dark:block" />
            <PiMoon className="size-5 dark:hidden" />
          </button>
        </nav>
      </div>
    </header>
  );
}
