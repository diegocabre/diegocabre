"use client";
import { useState, useEffect } from "react";

export const NavBar = () => {
    const [activeSection, setActiveSection] = useState("Inicio");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let currentSection = "Inicio";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id") || "Inicio";
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId) as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-48 bg-background text-letras p-4 hidden md:block">
            <ul className="steps steps-vertical">
                <li
                    className={`step ${activeSection === "Inicio" ? "step-primary" : ""}`}
                    onClick={() => scrollToSection("Inicio")}
                >
                    Inicio
                </li>
                <li
                    className={`step ${activeSection === "Quien Soy" ? "step-primary" : ""}`}
                    onClick={() => scrollToSection("Quien Soy")}
                >
                    Quien Soy
                </li>
                <li
                    className={`step ${activeSection === "Proyectos" ? "step-primary" : ""}`}
                    onClick={() => scrollToSection("Proyectos")}
                >
                    Proyectos
                </li>
                <li
                    className={`step ${activeSection === "Contacto" ? "step-primary" : ""}`}
                    onClick={() => scrollToSection("Contacto")}
                >
                    Contacto
                </li>
            </ul>
        </div>
    );
};
