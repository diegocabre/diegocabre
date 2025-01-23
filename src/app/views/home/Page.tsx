import { CardSkill } from "@/app/components/cards/CardSkill";
import Image from "next/image";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function HomePage() {
    const card = [
        {
            title: "HTML",
            description: "Lenguaje de marcado utilizado para estructurar el contenido en la web.",
            icon: <IoLogoHtml5 style={{ color: "#E44D26" }} />,
        },
        {
            title: "CSS",
            description: "Lenguaje de estilos en cascada que define la apariencia y el diseño de las páginas web.",
            icon: <IoLogoCss3 style={{ color: "#1572B6" }} />,
        },
        {
            title: "JavaScript",
            description: "Lenguaje de programación versátil que permite añadir interactividad y lógica a las páginas web.",
            icon: <IoLogoJavascript style={{ color: "#F7DF1E" }} />,
        },
        {
            title: "TypeScript",
            description: "Superset de JavaScript que añade tipado estático para mejorar la robustez y la mantenibilidad del código.",
            icon: <SiTypescript style={{ color: "#3178C6" }} />,
        },
        {
            title: "React",
            description: "Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes reutilizables.",
            icon: <IoLogoReact style={{ color: "#61DAFB" }} />,
        },
        {
            title: "Next.js",
            description: "Framework de React que facilita la creación de aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.",
            icon: <RiNextjsFill style={{ color: "#000000" }} />,
        },
        {
            title: "Tailwind CSS",
            description: "Framework de CSS basado en utilidades que permite diseñar interfaces rápidamente con clases predefinidas.",
            icon: <BiLogoTailwindCss style={{ color: "#06B6D4" }} />,
        },
        {
            title: "GitHub",
            description: "Lenguaje de control de versiones que permite la gestión y el control de cambios en el código.",
            icon: <IoLogoGithub style={{ color: "#000000" }} />,
        },
        {
            title: "Node.js",
            description: "Entorno de ejecución de JavaScript en el lado del servidor.",
            icon: <IoLogoNodejs style={{ color: "#68A063" }} />,
        },
        {
            title: "PostgreSQL",
            description: "Sistema de gestión de bases de datos relacional.",
            icon: <BiLogoPostgresql style={{ color: "#336791" }} />,
        },
    ];

    return (
        <div>
            {/* Header con logo */}
            <header className="flex flex-col items-center justify-between p-6 w-full">
                <Image
                    src="/images/logosf.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="filter brightness-125"
                />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mt-4">
                    Diego <span className="text-titulo">Cabré</span>
                </h1>
            </header>

            {/* Main Content */}
            <main className="text-center px-6 py-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Desarrollador Frontend y Backend</h2>
                <p className="mb-8 text-lg sm:text-xl">Codifico y diseño interfaces web de alta calidad</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {card.map((card, index) => (
                        <CardSkill
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
