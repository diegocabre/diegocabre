import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    imagen?: string;
    button?: string;
    href?: string;
}

export const CardProjet = ({ title, href, description, imagen, button }: Props) => {
    return (
        <div className="group relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            {/* Imagen */}
            {imagen && (
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                    <Image
                        className="object-cover w-full h-full"
                        src={imagen}
                        alt={`Imagen relacionada con ${title}`}
                        width={500}
                        height={500}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            )}
            {/* Contenido */}
            <div className="flex flex-col p-6 space-y-4 md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {title}
                </h2>
                <p className="text-gray-600">{description}</p>
                {/* Botón (se muestra solo si href y button están definidos) */}
                {href && button && (
                    <div className="mt-auto">
                        <Link
                            href={href}
                            className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {button}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

