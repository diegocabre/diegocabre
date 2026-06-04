"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
    const [activeSection, setActiveSection] = useState("Inicio");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let currentSection = "Inicio";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionHeight = rect.height;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id") || "Inicio";
                }
            });
            setActiveSection(currentSection);
        };

        // Ejecutar inmediatamente para configurar la sección activa correcta al cargar la página
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId) as HTMLElement;
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: "Inicio", label: "Inicio" },
        { id: "Quien Soy", label: "Quién Soy" },
        { id: "Proyectos", label: "Proyectos" },
        { id: "Contacto", label: "Contacto" },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-48 bg-slate-950/60 backdrop-blur-md border-r border-slate-900/40 p-6 hidden md:flex flex-col justify-between z-50">
                <div className="space-y-12">
                    {/* Brand/Logo */}
                    <div className="flex flex-col items-center pt-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-indigo-500/20">
                            DC
                        </div>
                        <span className="mt-3 text-sm font-bold text-white tracking-wider">Diego Cabré</span>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`group relative w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                        ? "text-indigo-400 bg-indigo-500/10"
                                        : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute left-0 top-1/4 h-1/2 w-1 bg-indigo-500 rounded-r-md"></span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="text-xs text-slate-500 text-center">
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </div>

            {/* Mobile Top Header */}
            <div className="fixed top-0 left-0 w-full h-16 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/40 px-6 flex items-center justify-between z-50 md:hidden">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-extrabold">
                        DC
                    </div>
                    <span className="text-sm font-bold text-white tracking-wider">Diego Cabré</span>
                </div>
                
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                    {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay (Drawer) */}
            <div
                className={`fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center md:hidden transition-all duration-350 ease-in-out ${
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
                }`}
            >
                <nav className="flex flex-col space-y-8 text-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-2xl font-extrabold tracking-wider transition-colors ${
                                activeSection === item.id
                                    ? "text-indigo-400"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};
