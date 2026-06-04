import { CardProjet } from "@/app/components/cards/CardProjet";
import Link from "next/link";

export default function WorkPage() {
    const proyectos = [
        {
            title: "El Rincón del Aromo",
            description: "Sitio web completo y optimizado para la reserva y visualización de servicios turísticos del Hotel Cabañas El Rincón del Aromo.",
            imagen: "/images/aromo.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://elrincondelaromo.vercel.app/",
            href1: "https://github.com/diegocabre/elrincondelaromo",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Delegado Curso",
            description: "Plataforma administrativa y de comunicación delegada diseñada para coordinar tareas, eventos y avisos en grupos de estudio.",
            imagen: "/images/delegados.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://delegadocurso.vercel.app/",
            href1: "https://github.com/diegocabre/delegadocurso",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Soluciones D&S",
            description: "Sitio web corporativo de servicios TI desarrollado con un diseño enfocado en la conversión, velocidad de carga y experiencia de usuario.",
            imagen: "/images/solucionesdys.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://solucionesdys.vercel.app/",
            href1: "https://github.com/diegocabre/solucionesdys",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Club House Pirque",
            description: "Página web corporativa realizada para el Hotel Club House Pirque, integrando galería de fotos, servicios y reservas.",
            imagen: "/images/pirque.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://www.clubhousepirque.cl/",
            href1: "https://github.com/diegocabre/club-house-pirque",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
        {
            title: "Neydemar Martínez",
            description: "Landing page y portafolio profesional desarrollado para potenciar la marca personal y captar clientes calificados.",
            imagen: "/images/ney.png",
            button: "Ver Demo",
            button1: "Ver Código",
            href: "https://www.neymartinez.com/",
            href1: "https://github.com/diegocabre/neymartinez",
            skill: ["React1.svg", "Tailwind1.svg", "Next1.svg", "typescript.svg"],
        },
    ];

    return (
        <div className="w-full px-6 py-20 max-w-7xl mx-auto space-y-12">
            {/* Encabezado */}
            <div className="text-center md:text-left space-y-3">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    Mis Trabajos Recientes
                </h2>
                <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
                    Estos son algunos de mis proyectos recientes. ¿Quieres más información? Escríbeme un correo:{" "}
                    <Link
                        href="mailto:diegocabre@gmail.com"
                        className="text-indigo-400 hover:text-indigo-300 underline transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        diegocabre@gmail.com
                    </Link>
                </p>
            </div>

            {/* Grid de Proyectos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
