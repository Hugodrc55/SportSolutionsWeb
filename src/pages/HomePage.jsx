import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Stats from "../components/Stats.jsx";
import Dispositifs from "../components/Dispositifs.jsx";
import Partenaires from "../components/Partenaires.jsx";
import ProjetsFSE from "../components/ProjetsFSE.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <title>Sport Solutions | Le sport au service de l'emploi</title>
      <meta name="description" content="Sport Solutions – parcours d'insertion et de qualification dans le sport aquatique et terrestre en Île-de-France. Association loi 1901 conventionnée avec le Ministère du Travail." />
      <Hero />
      <About />
      <Stats />
      <Dispositifs />
      <Partenaires />
      <ProjetsFSE />
      <Contact />
    </>
  );
}
