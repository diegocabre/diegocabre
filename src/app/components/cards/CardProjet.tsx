import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Props {
    title: string;
    description: string;
    imagen?: string;
    button?: string;
    button1?: string;
    href?: string;
    href1?: string;
    skills?: string[];  // Array para múltiples imágenes de skill
}

export const CardProjet = ({ title, href, description, imagen, button, skills, href1, button1 }: Props) => {
    return (
        <div className="group relative flex flex-col md:flex-row bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-indigo-500/10">
            {/* Imagen del proyecto */}
            {imagen && (
                <div className="relative w-full md:w-2/5 h-52 md:h-auto overflow-hidden">
                    <Image
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                        src={imagen}
                        alt={`Imagen relacionada con ${title}`}
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-slate-950/20"></div>
                </div>
            )}

            {/* Contenido */}
            <div className="flex flex-col p-6 space-y-4 md:w-3/5 justify-between">
                <div className="space-y-2">
                    {/* Habilidades en la cabecera del card */}
                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            {skills.map((skill, index) => {
                                const name = skill.replace(".svg", "").replace("1", "");
                                return (
                                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700/50 capitalize">
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    <h2 className="text-2xl font-extrabold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Botones */}
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-800/50">
                    {href && button && (
                        <Link
                            href={href}
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 hover:shadow-indigo-500/20 active:scale-95"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiExternalLink className="text-sm" />
                            {button}
                        </Link>
                    )}

                    {href1 && button1 && (
                        <Link
                            href={href1}
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700/80 hover:text-white transition-all duration-300 active:scale-95"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub className="text-sm" />
                            {button1}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
