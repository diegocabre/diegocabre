export const site = {
  name: "Diego Cabré",
  role: "Full Stack Developer Jr.",
  motto: "Conectando innovación con confiabilidad",
  url: "https://diegocabre.vercel.app",
  email: "diegocabre@gmail.com",
  github: "https://github.com/diegocabre",
  linkedin: "https://www.linkedin.com/in/diegoantoniocabreperrone/",
  // Cuando exista, poner la ruta del PDF en public/ (ej. "/cv-diego-cabre.pdf") y aparece el botón.
  cv: null as string | null,
  // Cuando exista, poner la foto en public/images/ (ej. "/images/diego.jpg") y aparece en "Sobre mí".
  photo: null as string | null,
};

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["Node.js", "Route Handlers y Server Actions", "Zod", "Resend"] },
  { group: "Datos", items: ["PostgreSQL", "Supabase", "Prisma"] },
  { group: "Calidad y entrega", items: ["Vitest", "Playwright", "Git y GitHub", "Vercel"] },
];

// TODO(Diego): agregar años a cada hito si quieres mostrarlos.
export const timeline = [
  { title: "Formación en Informática", body: "Bases de programación, redes y bases de datos." },
  {
    title: "Bootcamp Fullstack JavaScript, Desafío Latam",
    body: "React, Node.js, Express y PostgreSQL con proyectos semanales.",
  },
  {
    title: "Soluciones DyS",
    body: "Sitios y sistemas en producción para pymes de Los Lagos y todo Chile.",
  },
];
