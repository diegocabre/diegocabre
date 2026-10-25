import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="group/l inline-flex items-center gap-1 py-1 text-fg underline decoration-accent decoration-2 underline-offset-4"
      >
        Demo
        <PiArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
        <span className="sr-only">de {p.name} (abre en otra pestaña)</span>
      </a>
      <a
        href={p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 py-1 text-muted transition-colors hover:text-fg"
      >
        <PiGithubLogo className="size-4" />
        Código
        <span className="sr-only">de {p.name} en GitHub</span>
      </a>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
      {items.map((t) => (
        <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Role({ p }: { p: Project }) {
  return (
    <p className="text-sm text-muted">
      Mi rol: <span className="text-fg">{p.role}</span>
    </p>
  );
}

function Shot({ p, sizes }: { p: Project; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <Image
        src={p.image}
        alt={p.alt}
        width={1440}
        height={900}
        sizes={sizes}
        className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">Proyectos en producción</h2>
      <p className="mt-3 max-w-[60ch] text-muted">
        Cinco sistemas que hoy usan clientes reales. Cada uno con su código público en GitHub.
      </p>

      <Reveal className="mt-14">
        <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Shot p={featured} sizes="(min-width: 1024px) 640px, 100vw" />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{featured.name}</h3>
            <p className="leading-relaxed text-muted">{featured.summary}</p>
            <Role p={featured} />
            <ul className="space-y-1.5 text-sm">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <Tags items={featured.stack} />
            <Links p={featured} />
          </div>
        </article>
      </Reveal>

      <div className="mt-24 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i % 2}>
            <article className="group flex h-full flex-col gap-5">
              <Shot p={p} sizes="(min-width: 768px) 540px, 100vw" />
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="leading-relaxed text-muted">{p.summary}</p>
                <Role p={p} />
                <p className="text-sm">{p.highlights.join(". ")}.</p>
                <Tags items={p.stack} />
                <div className="mt-auto pt-1">
                  <Links p={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
