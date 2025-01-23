import React from "react";

interface Props {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imagen?: string;
    button?: string;
}

export const CardSkill = ({ title, description, icon }: Props) => {
    return (
        <div className="w-full sm:w-64 h-64 perspective-1000 mx-auto">
            {/* Contenedor con perspectiva 3D */}
            <div className="relative w-full h-full group transform-style-preserve-3d">
                {/* Cara frontal de la tarjeta */}
                <div className="absolute inset-0 bg-background border border-parrafo flex flex-col justify-center items-center rounded-xl shadow-lg transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                    <div className="text-5xl mb-4">{icon}</div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>

                {/* Cara trasera de la tarjeta */}
                <div className="absolute inset-0 text-background bg-subtitulo border border-parrafo p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-lg opacity-0 transform rotate-y-180 transform-style-preserve-3d transition-transform duration-500 group-hover:opacity-100 group-hover:rotate-y-360">
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
                {/* Boton */}
            </div>
        </div>
    );
};
