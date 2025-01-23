export default function AboutPage() {
    return (
        <div className="relative flex items-center justify-center min-h-screen text-center">
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/video/codigo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>

            {/* Contenedor del texto */}
            <div className="relative bg-black bg-opacity-50 text-white p-6 rounded-lg max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hola, soy Diego. Un gusto conocerte.
                </h1>
                <p className="text-lg md:text-xl">
                    Soy un apasionado del desarrollo web y siempre estoy explorando nuevas
                    tecnologías para crecer como profesional. Me gradué como Fullstack
                    JavaScript Developer en Desafío Latam en 2024 y desde entonces he trabajado
                    en proyectos que combinan creatividad y funcionalidad. Me considero curioso,
                    proactivo y comprometido con cada desafío que asumo.
                </p>
            </div>
        </div>
    );
}
