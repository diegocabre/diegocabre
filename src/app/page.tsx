import { NavBar } from "./components";
import AboutPage from "./views/about/Page";
import HomePage from "./views/home/Page";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="ml-48">         <section className="min-h-screen bg-background flex flex-col" id="Inicio">
        <HomePage />
      </section>
        <section className="relative min-h-screen flex flex-col" id="Quien Soy">
          <div className="z-10">
            <AboutPage />
          </div>
        </section>

        <section className="min-h-screen bg-yellow-100 flex flex-col" id="Proyectos">
          <h1>Proyectos</h1>
        </section>
        <section className="min-h-screen bg-red-100 flex flex-col" id="Contacto">
          <h1>Contacto</h1>
        </section>
      </div>
    </>
  );
}
