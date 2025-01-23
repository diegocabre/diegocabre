import { CardProjet } from "@/app/components/cards/CardProjet";
import Link from "next/link";

export default function WorkPage() {
    const proyectos = [
        {
            title: "Club House Pirque",
            description: "Web para el Hotel Club House Pirque",
            imagen: "/images/pirque.png",
            button: "Ver Demo",
            href: "https://www.clubhousepirque.cl/",
        },
        {
            title: "Neydemar Martinez",
            description: "Landing Page de Neydemar Martinez",
            imagen: "/images/ney.png",
            button: "Ver Demo",
            href: "https://www.neymartinez.com/",
        },
        {
            title: "Pokedex",
            description: "Pokedex de Pokemon en Astro",
            imagen: "/images/Pokedex.png",
            button: "Ver Demo",
            href: "https://pokedex-astro-solid.vercel.app/",
        },
        {
            title: "Gestión de Tickets",
            description: "Gestión de Tickets",
            imagen: "/images/gestion.png",
            button: "Ver Demo",
            href: "https://gestion-tickets.vercel.app/",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {proyectos.map((proyecto, index) => (
                    <CardProjet
                        key={index}
                        title={proyecto.title}
                        description={proyecto.description}
                        imagen={proyecto.imagen}
                        button={proyecto.button}
                        href={proyecto.href}
                    />
                ))}
            </div>
        </div>
    );
}
