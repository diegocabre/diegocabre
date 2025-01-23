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
      <div className="ml-0 md:ml-48">
        {/* Inicio */}
        <section className="min-h-screen bg-background flex flex-col" id="Inicio">
          <HomePage />
        </section>

        {/* Quien Soy */}
        <section className="relative min-h-screen flex flex-col" id="Quien Soy">
          <AboutPage />
        </section>

        {/* Proyectos */}
        <section className="min-h-screen bg-background flex flex-col" id="Proyectos">
          <WorkPage />
        </section>

        {/* Contacto */}
        <section className="min-h-screen bg-titulo flex items-center justify-center" id="Contacto">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </>
  );
}
