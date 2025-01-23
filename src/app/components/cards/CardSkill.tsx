import React from "react";

interface Props {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const CardSkill = ({ title, description, icon }: Props) => {
    return (
        <div className="w-96 h-64 perspective-1000"> {/* Añadimos perspectiva 3D */}
            <div className="relative w-full h-full group">
                {/* Parte delantera de la tarjeta */}
                <div className="absolute inset-0 bg-base-100 flex justify-center items-center rounded-xl transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Aumentamos el tamaño del icono */}
                    <div className="text-5xl">{icon}</div>
                </div>

                {/* Parte trasera de la tarjeta */}
                <div className="absolute inset-0 bg-base-100 p-6 rounded-xl flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:rotate-y-180">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};
