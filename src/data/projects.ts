export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
  demo: string;
  repo: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    name: "Reservas Cabañas Sur",
    summary:
      "Reserva directa para cabañas del sur de Chile: el huésped ve la disponibilidad, paga el abono con Mercado Pago y recibe su confirmación, sin comisiones de plataforma.",
    highlights: ["Pagos con Mercado Pago", "PostgreSQL con Prisma", "Tests con Vitest"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Mercado Pago", "Resend", "Zod", "Vitest"],
    demo: "https://reservas.solucionesdys.cl",
    repo: "https://github.com/diegocabre/reservas-cabanas",
    image: "/images/projects/reservas-cabanas.jpg",
    alt: "Portada de Reservas Cabañas Sur con la tarjeta de la Cabaña Maicolpue y su precio por noche",
  },
  {
    name: "Estribor Consultores",
    summary:
      "Sitio corporativo, portal de empleo y agenda de reuniones para una consultora chilena en gestión de personas, seguridad laboral y sostenibilidad.",
    highlights: ["Supabase: Postgres, Auth y Storage", "Tests E2E con Playwright"],
    stack: ["Next.js", "TypeScript", "Supabase", "Zod", "Vitest", "Playwright"],
    demo: "https://www.estriborconsultores.cl",
    repo: "https://github.com/diegocabre/estribor",
    image: "/images/projects/estribor.jpg",
    alt: "Inicio de Estribor Consultores con el titular sobre seguridad, personas y sostenibilidad",
  },
  {
    name: "Caroline Magic",
    summary:
      "Catálogo de sesiones, rituales, academia y tienda, con reserva por WhatsApp en un clic y un panel privado para publicar la carta del día.",
    highlights: ["Panel privado de administración", "Privacidad según Ley 19.628 y 21.719"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://www.carolinemagic.cl",
    repo: "https://github.com/diegocabre/carolinemagic",
    image: "/images/projects/carolinemagic.jpg",
    alt: "Inicio de Caroline Magic con el titular El Arte de Revelar lo Invisible",
  },
  {
    name: "Dogtoralia Vet",
    summary:
      "Sitio de una clínica veterinaria con dos sedes en Santiago: servicios, tienda vitrina y agenda por WhatsApp en un toque.",
    highlights: ["Validación con Zod", "Correos con Resend"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Resend"],
    demo: "https://www.dogtoraliavet.cl/home",
    repo: "https://github.com/diegocabre/dogtoralia",
    image: "/images/projects/dogtoralia.jpg",
    alt: "Inicio de Dogtoralia Vet con el equipo veterinario y los botones de WhatsApp por sede",
  },
  {
    name: "Soluciones DyS",
    summary: "Sitio de mi empresa: sitios web a medida para pymes de Puerto Varas, Los Lagos y todo Chile.",
    highlights: ["Tests con Vitest", "Formulario con Resend"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Vitest"],
    demo: "https://www.solucionesdys.cl",
    repo: "https://github.com/diegocabre/solucionesdys",
    image: "/images/projects/solucionesdys.jpg",
    alt: "Inicio de Soluciones DyS con el titular Diseño y desarrollo web en Puerto Varas",
  },
];
