export default function AboutPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0" // Video de fondo
            >
                <source src="/video/codigo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
            <div className="relative bg-black/50 text-white p-6 rounded-lg max-w-3xl mx-auto z-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Hola, soy Diego. Un gusto conocerte.
                </h1>
                <p className="text-lg sm:text-xl">
                    Soy un desarrollador web apasionado, enfocado en combinar creatividad y funcionalidad en cada proyecto. Con una formación en Informática y un Bootcamp de Fullstack JavaScript Developer en Desafío Latam, he adquirido sólidas competencias en tecnologías modernas de desarrollo web. He participado en proyectos que van desde aplicaciones interactivas hasta sistemas escalables, siempre priorizando la innovación y la excelencia técnica. Me destaco por mi curiosidad, proactividad y compromiso constante con la mejora continua y la resolución de desafíos.
                </p>
            </div>
        </div>
    );
}
