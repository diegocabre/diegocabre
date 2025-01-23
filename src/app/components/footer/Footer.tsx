import Link from "next/link";
import Image from "next/image";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="bg-letras text-background p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Logo */}
                <aside className="flex justify-center md:justify-start relative">
                    <div className="relative group">
                        {/* Contorno brillante */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-background via-background to-background blur-md opacity-75 animate-pulse"></div>
                        <Image
                            src="/images/logosf.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="relative z-10 rounded-lg"
                        />
                    </div>
                </aside>



                {/* Social Links */}
                <nav className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-4">Sígueme</h2>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <Link
                            href="https://api.whatsapp.com/send?phone=+56947637541"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-green-500 transition-colors duration-300"
                        >
                            <IoLogoWhatsapp />
                        </Link>
                        <Link
                            href="https://www.instagram.com/devcabre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-pink-500 transition-colors duration-300"
                        >
                            <IoLogoInstagram />
                        </Link>
                        <Link
                            href="mailto:diegocabre@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-blue-500 transition-colors duration-300"
                        >
                            <AiTwotoneMail />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/diegoantoniocabreperrone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-blue-500 transition-colors duration-300"
                        >
                            <IoLogoLinkedin />
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center border-t border-gray-700 pt-4">
                <p className="text-sm text-background">
                    © {new Date().getFullYear()} Diego Cabré. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
