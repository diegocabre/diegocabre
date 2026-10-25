import { PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

const direct = [
  { href: `mailto:${site.email}`, label: site.email, icon: PiEnvelopeSimple },
  { href: site.linkedin, label: "LinkedIn", icon: PiLinkedinLogo },
  { href: site.github, label: "GitHub", icon: PiGithubLogo },
];

export function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Hablemos</h2>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-muted">
            Estoy disponible para trabajar. ¿Tienes una vacante o un proyecto? Escríbeme y te respondo a la brevedad.
          </p>
          <ul className="mt-8 space-y-3">
            {direct.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-3 text-fg transition-colors hover:text-accent"
                >
                  <Icon className="size-5 text-muted" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
