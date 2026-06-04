import Link from "next/link";
import Image from "next/image";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Logo */}
                <aside className="flex justify-center md:justify-start relative">
                    <div className="relative group">
                        {/* Contorno brillante */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-indigo-500/20 blur-md opacity-75 animate-pulse"></div>
                        <Image
                            src="/images/logosf.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            className="relative z-10 rounded-lg filter brightness-110"
                        />
                    </div>
                </aside>

                {/* Social Links */}
                <nav className="text-center md:text-left">
                    <h2 className="text-lg font-bold text-white mb-4 tracking-wider uppercase">Sígueme</h2>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <Link
                            href="https://api.whatsapp.com/send?phone=+56947637541"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-slate-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
                        >
                            <IoLogoWhatsapp />
                        </Link>
                        <Link
                            href="https://www.instagram.com/devcabre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-slate-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                        >
                            <IoLogoInstagram />
                        </Link>
                        <Link
                            href="mailto:diegocabre@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-slate-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
                        >
                            <AiTwotoneMail />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/diegoantoniocabreperrone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                        >
                            <IoLogoLinkedin />
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center border-t border-slate-900 pt-6">
                <p className="text-xs text-slate-500">
                    © {new Date().getFullYear()} Diego Cabré. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
