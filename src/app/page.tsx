import { NavBar } from "./components";
import AboutPage from "./views/about/Page";
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
        <section className="min-h-screen bg-red-100 flex flex-col" id="Contacto">
          <h1 className="text-4xl font-bold text-center mt-16">Contacto</h1>
        </section>
      </div>
    </>
  );
}
