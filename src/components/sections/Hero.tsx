import Image from "next/image";
import { PiArrowDown, PiDownloadSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { site } from "@/data/site";

const btn =
  "inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.97]";
const link = "inline-flex items-center gap-1.5 py-1 transition-colors hover:text-fg";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 md:pt-24 lg:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h1
            className="hero-in text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            {site.name}
            <span className="mt-3 block text-2xl font-medium tracking-tight text-muted md:text-3xl">{site.role}</span>
          </h1>

          <p
            className="hero-in mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
            style={{ "--d": 2 } as React.CSSProperties}
          >
            <span className="text-fg">{site.motto}.</span> Desarrollo aplicaciones con React, Next.js, Node y PostgreSQL:
            cinco ya funcionan en producción para empresas chilenas.
          </p>

          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ "--d": 3 } as React.CSSProperties}>
            <a href="#proyectos" className={`${btn} neon bg-accent text-accent-ink hover:brightness-110`}>
              Ver proyectos
              <PiArrowDown className="size-4" />
            </a>
            <a href="#contacto" className={`${btn} border border-line hover:border-fg/40`}>
              Contacto
            </a>
          </div>

          <ul
            className="hero-in mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
            style={{ "--d": 4 } as React.CSSProperties}
          >
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={link}>
                <PiGithubLogo className="size-4" aria-hidden />
                GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                <PiLinkedinLogo className="size-4" aria-hidden />
                LinkedIn
              </a>
            </li>
            {site.cv && (
              <li>
                <a href={site.cv} download className={link}>
                  <PiDownloadSimple className="size-4" aria-hidden />
                  Descargar CV
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_oklch(0.2_0.02_255/0.45)]">
            <Image
              src="/images/projects/reservas-cabanas.jpg"
              alt="Reservas Cabañas Sur, proyecto full stack con pagos y base de datos PostgreSQL"
              width={1440}
              height={900}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-12 -left-10 hidden w-[40%] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-24px_oklch(0.2_0.02_255/0.5)] md:block">
            <Image
              src="/images/projects/estribor.jpg"
              alt=""
              width={1440}
              height={900}
              sizes="260px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
