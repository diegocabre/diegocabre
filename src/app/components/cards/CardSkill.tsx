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
        <div className="group w-full h-56 perspective-1000 mx-auto cursor-pointer">
            {/* Contenedor con perspectiva 3D */}
            <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
                
                {/* Cara frontal de la tarjeta */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-slate-800 flex flex-col justify-center items-center rounded-2xl shadow-lg backface-hidden p-6 transition-all duration-300 group-hover:border-indigo-500/50">
                    <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
                    <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
                </div>

                {/* Cara trasera de la tarjeta */}
                <div className="absolute inset-0 text-slate-200 bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg backface-hidden rotate-y-180">
                    <h2 className="text-lg font-bold text-white mb-2 tracking-wide">{title}</h2>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">{description}</p>
                </div>

            </div>
        </div>
    );
};
