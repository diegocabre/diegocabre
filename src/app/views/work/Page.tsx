import { CardProjet } from "@/app/components/cards/CardProjet";
import Link from "next/link";

export default function WorkPage() {
    const proyectos = [
        {
            title: "Club House Pirque",
            description: "Web para el Hotel Club House Pirque",
            imagen: "/images/pirque.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://www.clubhousepirque.cl/",
            href1: "https://github.com/diegocabre/club-house-pirque",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Neydemar Martínez",
            description: "Landing Page de Neydemar Martínez",
            imagen: "/images/ney.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://www.neymartinez.com/",
            href1: "https://github.com/diegocabre/neymartinez",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Pokedex",
            description: "Pokedex de Pokemon en Astro",
            imagen: "/images/Pokedex.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://pokedex-astro-solid.vercel.app/",
            href1: "https://github.com/diegocabre/pokedex-Astro-Solid",
            skill: ["Astro1.svg", "Tailwind1.svg", "typescript.svg"],
        },
        {
            title: "Gestión de Tickets",
            description: "Gestión de Tickets",
            imagen: "/images/gestion.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://gestion-tickets.vercel.app/",
            href1: "https://github.com/diegocabre/Gestion-Tickets",
            skill: ["javascript.svg"],
        },
    ];

    return (
        <div className="px-4 py-8 bg-gray-100">
            {/* Encabezado */}
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Mis Trabajos Recientes
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Estos son algunos de mis proyectos recientes. ¿Quieres más información? Escríbeme un correo:{" "}
                    <Link
                        href="mailto:diegocabre@gmail.com"
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        diegocabre@gmail.com
                    </Link>
                </p>
            </div>

            {/* Grid de Proyectos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {proyectos.map((proyecto, index) => (
                    <CardProjet
                        key={index}
                        title={proyecto.title}
                        description={proyecto.description}
                        imagen={proyecto.imagen}
                        button={proyecto.button}
                        button1={proyecto.button1}
                        href={proyecto.href}
                        href1={proyecto.href1}
                        skills={proyecto.skill}
                    />
                ))}
            </div>
        </div>
    );
}
