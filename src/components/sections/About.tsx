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
              Soy desarrollador full stack, con formación en Informática y el bootcamp Fullstack JavaScript de Desafío
              Latam. Hoy diseño, construyo y mantengo sitios y sistemas para pymes chilenas, desde la base de datos hasta
              el despliegue.
            </p>
            <p>
              Me importa que lo que entrego funcione: tipado estricto, validación en el servidor, pruebas y
              documentación. Busco sumarme a un equipo donde seguir creciendo como{" "}
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
                    i === timeline.length - 1 ? "bg-accent" : "bg-line"
                  }`}
                />
                <p className="font-semibold tracking-tight">{t.title}</p>
                <p className="mt-1 text-muted">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
