import { CardSkill } from "@/app/components/cards/CardSkill";
import Link from "next/link";

export default function WorkPage() {

    const proyectos = [{
        title: "Club House Pirque",
        description: "Web para el Hotel Club House Pirque",
        imagen: "/images/clubhouse.png",
    }
    ];



    return (
        <>
            <div>
                <h1>Mis Trabajos Recientes</h1>
                <p>Estos son algunos de mis proyectos recientes. Quieres más información? escribeme un correo:
                    <Link
                        href="mailto:diegocabre@gmail.com"
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Email</Link> </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {proyectos.map((proyecto, index) => (
                    <CardSkill
                        key={index}
                        title={proyecto.title}
                        description={proyecto.description}
                        imagen={proyecto.imagen}
                    />
                ))}
            </div>
        </>
    );
}