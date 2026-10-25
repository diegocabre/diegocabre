export const site = {
  name: "Diego Cabré",
  role: "Full Stack Developer Jr.",
  motto: "Conectando innovación con confiabilidad",
  url: "https://diegocabre.vercel.app",
  email: "diegocabre@gmail.com",
  github: "https://github.com/diegocabre",
  linkedin: "https://www.linkedin.com/in/diegoantoniocabreperrone/",
  cv: "/cv-diego-cabre.pdf" as string | null,
  // Cuando exista, poner la foto en public/images/ (ej. "/images/diego.jpg") y aparece en "Sobre mí".
  photo: null as string | null,
};

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express y APIs REST", "Zod", "Mercado Pago y Resend"] },
  { group: "Datos", items: ["PostgreSQL", "Prisma", "Supabase", "Redis (Upstash)"] },
  { group: "Cloud y deploy", items: ["Vercel", "Vercel Blob y Cron", "GitHub Actions", "Cloudflare Turnstile"] },
  { group: "Herramientas", items: ["Git y GitHub", "Vitest", "Playwright", "ESLint", "Claude Code"] },
];

export const timeline = [
  {
    period: "2000-2005",
    title: "Técnico Superior Universitario en Informática",
    body: "Instituto Universitario de Tecnología Antonio José de Sucre, Venezuela.",
  },
  {
    period: "2009-2026",
    title: "Soporte TI, ventas B2B y Business Intelligence",
    body: "Soporte a usuarios y redes, luego jefaturas comerciales en Würth, Construmart e Imperial con reportes y tableros de decisión sobre SAP.",
  },
  {
    period: "2023-2024",
    title: "Bootcamp Full Stack JavaScript, Desafío Latam",
    body: "410 horas de React, Node.js, Express y PostgreSQL.",
  },
  {
    period: "2025-hoy",
    title: "Desarrollador web freelance, Soluciones DyS",
    body: "Sitios y aplicaciones para pymes de punta a punta: requerimientos, diseño, desarrollo, despliegue y mantención.",
  },
];
