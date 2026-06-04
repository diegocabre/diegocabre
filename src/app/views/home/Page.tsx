import { CardSkill } from "@/app/components/cards/CardSkill";
import Image from "next/image";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function HomePage() {
    const categories = [
        {
            name: "Desarrollo Frontend & Mobile",
            skills: [
                {
                    title: "HTML",
                    description: "Lenguaje de marcado estándar para estructurar y presentar contenido en la web.",
                    icon: <IoLogoHtml5 style={{ color: "#E44D26" }} />,
                },
                {
                    title: "CSS",
                    description: "Lenguaje de diseño que define la presentación y estilos visuales en la web.",
                    icon: <IoLogoCss3 style={{ color: "#1572B6" }} />,
                },
                {
                    title: "JavaScript",
                    description: "Lenguaje de programación interactivo que proporciona lógica en el cliente y servidor.",
                    icon: <IoLogoJavascript style={{ color: "#F7DF1E" }} />,
                },
                {
                    title: "TypeScript",
                    description: "Superset de JavaScript que añade tipado estático, mejorando la robustez y mantenibilidad.",
                    icon: <SiTypescript style={{ color: "#3178C6" }} />,
                },
                {
                    title: "React",
                    description: "Biblioteca JavaScript para crear interfaces de usuario interactivas basadas en componentes.",
                    icon: <IoLogoReact style={{ color: "#61DAFB" }} />,
                },
                {
                    title: "React Native",
                    description: "Framework para construir aplicaciones móviles nativas multiplataforma (iOS y Android) usando React.",
                    icon: <IoLogoReact style={{ color: "#00d8ff" }} />,
                },
                {
                    title: "Next.js",
                    description: "Framework React para producción con renderizado del lado del servidor (SSR) y optimización SEO.",
                    icon: <RiNextjsFill style={{ color: "#ffffff" }} />,
                },
                {
                    title: "Tailwind CSS",
                    description: "Framework CSS orientado a utilidades para el diseño rápido y responsivo de interfaces.",
                    icon: <BiLogoTailwindCss style={{ color: "#06B6D4" }} />,
                }
            ]
        },
        {
            name: "Backend & Bases de Datos",
            skills: [
                {
                    title: "Node.js",
                    description: "Entorno de ejecución JavaScript en el backend para construir servidores y APIs escalables.",
                    icon: <IoLogoNodejs style={{ color: "#68A063" }} />,
                },
                {
                    title: "PostgreSQL",
                    description: "Base de datos relacional potente, de código abierto y alta confiabilidad.",
                    icon: <BiLogoPostgresql style={{ color: "#336791" }} />,
                }
            ]
        },
        {
            name: "Control de Versiones",
            skills: [
                {
                    title: "GitHub",
                    description: "Plataforma de desarrollo y alojamiento de código basada en Git para control de versiones y colaboración.",
                    icon: <IoLogoGithub style={{ color: "#ffffff" }} />,
                }
            ]
        }
    ];

    return (
        <div className="w-full text-slate-100 pb-16">
            
            {/* Hero Section */}
            <header className="relative overflow-hidden pt-28 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
                {/* Background Glow */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
                
                {/* Text Block */}
                <div className="flex-1 text-center md:text-left space-y-6 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        Disponible para nuevos proyectos
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                        Diego <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Cabré</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">
                        Desarrollador Frontend y Backend
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                        Codifico y diseño interfaces web interactivas, responsivas y de alta calidad. Especializado en crear experiencias digitales fluidas uniendo el poder del frontend y la robustez del backend.
                    </p>
                </div>

                {/* Logo Frame */}
                <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 flex-shrink-0">
                    {/* Ring background decorations */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-transparent animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-800">
                        <Image
                            src="/images/logosf.png"
                            alt="Diego Cabré Logo"
                            width={220}
                            height={220}
                            className="object-contain filter brightness-110 p-4"
                            priority
                        />
                    </div>
                </div>
            </header>

            {/* Skills Section */}
            <main className="px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto space-y-16">
                
                <div className="text-center md:text-left space-y-2">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        Habilidades y Tecnologías
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl">
                        Las herramientas, lenguajes y frameworks que utilizo para dar vida a los proyectos.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-12">
                    {categories.map((cat, catIdx) => (
                        <div key={catIdx} className="space-y-6">
                            <h3 className="text-xl font-bold text-indigo-400 border-b border-slate-800 pb-2">
                                {cat.name}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {cat.skills.map((skill, index) => (
                                    <CardSkill
                                        key={index}
                                        title={skill.title}
                                        description={skill.description}
                                        icon={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
