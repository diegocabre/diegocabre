export default function AboutPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-center px-6">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" // Reducido opacidad para contraste
            >
                <source src="/video/codigo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
            
            {/* Capa de degrade para transición suave entre secciones */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-0 pointer-events-none"></div>

            <div className="relative bg-slate-900/70 backdrop-blur-lg border border-slate-800/80 text-slate-100 p-8 sm:p-10 rounded-2xl max-w-3xl mx-auto z-10 shadow-2xl">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">
                    Quién Soy
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white tracking-tight">
                    Hola, soy Diego. Un gusto conocerte.
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                    Soy un desarrollador web apasionado, enfocado en combinar creatividad y funcionalidad en cada proyecto. Con una formación en Informática y un Bootcamp de Fullstack JavaScript Developer en Desafío Latam, he adquirido sólidas competencias en tecnologías modernas de desarrollo web. He participado en proyectos que van desde aplicaciones interactivas hasta sistemas escalables, siempre priorizando la innovación y la excelencia técnica. Me destaco por mi curiosidad, proactividad y compromiso constante con la mejora continua y la resolución de desafíos.
                </p>
            </div>
        </div>
    );
}
