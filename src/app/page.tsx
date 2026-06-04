import { NavBar } from "./components";
import { Footer } from "./components/footer/Footer";
import AboutPage from "./views/about/Page";
import ContactPage from "./views/contact/Page";
import HomePage from "./views/home/Page";
import WorkPage from "./views/work/Page";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="ml-0 md:ml-48 pt-16 md:pt-0 min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          {/* Inicio */}
          <section className="min-h-screen bg-background flex flex-col justify-center" id="Inicio">
            <HomePage />
          </section>

          {/* Quien Soy */}
          <section className="relative min-h-screen flex flex-col justify-center" id="Quien Soy">
            <AboutPage />
          </section>

          {/* Proyectos */}
          <section className="min-h-screen bg-background flex flex-col justify-center" id="Proyectos">
            <WorkPage />
          </section>

          {/* Contacto */}
          <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4 py-20" id="Contacto">
            {/* Background Glow */}
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
            <ContactPage />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
