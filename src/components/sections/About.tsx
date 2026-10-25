import Image from "next/image";
import { site, timeline } from "@/data/site";

export function About() {
  return (
    <section id="sobre-mi" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          {site.photo && (
            <Image
              src={site.photo}
              alt={`Fotografía de ${site.name}`}
              width={160}
              height={160}
              className="mb-8 size-28 rounded-2xl border border-line object-cover"
            />
          )}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Sobre mí</h2>
          <div className="mt-6 max-w-[60ch] space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Soy desarrollador full stack en Puerto Varas, Chile, y trabajo 100% remoto. Desde 2025 tomo proyectos de
              punta a punta para empresas chilenas: levanto requerimientos, diseño la solución, la construyo con Next.js,
              Node.js y PostgreSQL, la pruebo y la mantengo en producción.
            </p>
            <p>
              Antes trabajé más de 15 años en ventas consultivas B2B y Business Intelligence, así que hablo el idioma del
              negocio y lo traduzco en funcionalidades. Uso IA a diario como herramienta de desarrollo (certificado
              Claude Code in Action, Anthropic) y busco sumarme a un equipo donde seguir creciendo como{" "}
              <span className="text-fg">Full Stack Developer</span>.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <h3 className="text-sm font-medium text-muted">Trayectoria</h3>
          <ol className="mt-6 border-l border-line">
            {timeline.map((t, i) => (
              <li key={t.title} className="relative pb-10 pl-6 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-bg ${
                    i === timeline.length - 1 ? "bg-accent neon" : "bg-line"
                  }`}
                />
                <p className="font-mono text-xs text-muted tabular-nums">{t.period}</p>
                <p className="mt-1 font-semibold tracking-tight">{t.title}</p>
                <p className="mt-1 text-muted">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
