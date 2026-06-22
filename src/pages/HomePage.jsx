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
