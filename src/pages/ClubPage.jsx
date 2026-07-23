import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import Tabs from "../components/ui/Tabs.jsx";

import imgHero from "../assets/image/sportsofo.png";
import clubEaubonne from "../assets/club/eaubonne.webp";
import clubAmns from "../assets/club/amns.webp";
import clubVilliers from "../assets/club/villiers.webp";
import clubUsee from "../assets/club/usee.webp";
import clubStBrice from "../assets/club/stbrice.png";
import clubSannois from "../assets/club/sannois.png";
import clubNeuilly from "../assets/club/neuilly.webp";
import clubFff95 from "../assets/club/fff95.webp";
import clubEbm from "../assets/club/ebm.webp";
import clubArgenteuil from "../assets/club/argenteuil.png";
import clubViarmesAsnieres from "../assets/club/viarmes-asnieres.webp";
import clubSevres from "../assets/club/sevres.webp";
import clubRcg from "../assets/club/rcg.webp";
import clubMontmorency from "../assets/club/montmorency.webp";
import clubFccs from "../assets/club/fccs.webp";
import clubAsVexin from "../assets/club/as-vexin.webp";
import clubAass from "../assets/club/aass.webp";
import clubVaureal from "../assets/club/vaureal.webp";
import clubSoa from "../assets/club/soa.png";
import clubMarly from "../assets/club/marly.png";
import clubMdp from "../assets/club/mdp.webp";
import clubJam from "../assets/club/jam.webp";
import club1 from "../assets/club/1.webp";

const clubLogos = [
  { src: clubEaubonne, alt: "CS Éaubonne" },
  { src: clubAmns, alt: "AMNS" },
  { src: clubVilliers, alt: "Club de Villiers" },
  { src: clubUsee, alt: "USEE" },
  { src: clubStBrice, alt: "Club de Saint-Brice" },
  { src: clubSannois, alt: "Club de Sannois" },
  { src: clubNeuilly, alt: "Club de Neuilly" },
  { src: clubFff95, alt: "FFF Val-d'Oise" },
  { src: clubEbm, alt: "EBM" },
  { src: clubArgenteuil, alt: "Club d'Argenteuil" },
  { src: clubViarmesAsnieres, alt: "Viarmes – Asnières" },
  { src: clubSevres, alt: "Club de Sèvres" },
  { src: clubRcg, alt: "RCG" },
  { src: clubMontmorency, alt: "Club de Montmorency" },
  { src: clubFccs, alt: "FCCS" },
  { src: clubAsVexin, alt: "AS Vexin" },
  { src: clubAass, alt: "AASS" },
  { src: clubVaureal, alt: "Club de Vauréal" },
  { src: clubSoa, alt: "SOA" },
  { src: clubMarly, alt: "Club de Marly" },
  { src: clubMdp, alt: "MDP" },
  { src: clubJam, alt: "JAM" },
  { src: club1, alt: "Club partenaire" },
];

const recrutementPoints = [
  "Nous accompagnons toutes les étapes de l'accueil et de l'insertion de notre salarié.",
  "Le stagiaire-apprenant est salarié par Sport Solutions et nous prenons en charge toute la charge administrative en parallèle des missions d'éducateur du salarié.",
  "À l'issue de sa formation, vous recrutez, si vous le souhaitez, une personne formée par vos soins et immédiatement opérationnelle.",
];

const actionsDeveloppement = [
  "Diagnostic",
  "Co-construction d'un Projet",
  "Aide au déploiement d'un Plan d'action",
];

const beneficesClub = [
  "Professionnalisez votre structure",
  "Sécurisez le parcours professionnel des éducateurs sportifs",
  "Opérez une montée en compétences nécessaire au développement de votre club",
];

const tabsClub = [
  {
    id: "geiq",
    label: "GEIQ Sport Solutions",
    content: (
      <div className="tab-content">
        <p>
          Le <strong>Groupement d'employeurs pour l'insertion et la qualification</strong> permet aux clubs de bénéficier d'un stagiaire-apprenant que nous salarions, tout en contribuant au développement de votre structure.
        </p>
        <ul>
          <li>Un stagiaire-apprenant rémunéré par Sport Solutions</li>
          <li>Un accompagnement pour développer les compétences dont vous avez besoin</li>
          <li>Un diplôme d'État en vue, sécurisant le parcours</li>
        </ul>
        <Link to="/contact" className="btn btn-primary">Devenir partenaire club</Link>
      </div>
    ),
  },
  {
    id: "aci",
    label: "Contexte ACI",
    content: (
      <div className="tab-content">
        <p>
          En parallèle du GEIQ, nos <strong>Ateliers Chantiers d'insertion</strong> (ACI) forment des personnes éloignées de l'emploi au métier du sport. Les clubs peuvent accueillir des personnes en parcours dans le cadre de conventions.
        </p>
        <p>
          Vous souhaitez développer l'activité de votre structure, avoir des éducateurs diplômés et renforcer votre modèle économique ? Sport Solutions met à votre disposition un accompagnement sur mesure.
        </p>
        <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
      </div>
    ),
  },
];

export default function ClubPage() {
  const duplicated = [...clubLogos, ...clubLogos];

  return (
    <div className="page page-club">
      <title>Espace Club | Sport Solutions</title>
      <meta name="description" content="Clubs sportifs : rejoignez Sport Solutions pour accueillir des salariés en insertion et développer votre projet associatif en Île-de-France. Partenariat ACI, GEIQ et SSC." />
      <section className="page-hero section">
        <div className="page-hero-bg" aria-hidden="true">
          <img src={imgHero} alt="" />
        </div>
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Espace <TextReveal text="Club" splitBy="char" className="accent" stagger={0.04} />
          </motion.h1>
          <motion.h2
            className="page-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Recrutement <TextReveal text="Sécurisé" splitBy="char" className="accent" stagger={0.04} />
          </motion.h2>
        </div>
      </section>

      {/* Recrutement sécurisé */}
      <section className="section">
        <div className="container">
          <ul className="club-recruit-list">
            {recrutementPoints.map((text, i) => (
              <motion.li
                key={i}
                className="club-recruit-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="club-recruit-num">{i + 1}</span>
                <p>{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programme Développement */}
      <section className="section section-alt">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Programme <span className="accent">Développement Sport Solutions</span>
          </motion.h2>
          <motion.blockquote
            className="club-exigence"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Le programme Développement Sport Solutions est conçu pour répondre à l'exigence suivante :<br />
            <strong>La pérennisation d'un emploi est strictement liée à la solidité et la structuration du projet associatif du club.</strong>
          </motion.blockquote>
          <motion.p
            className="club-accompagnement"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Les clubs disposent d'un accompagnement complet, allant d'un état des lieux solide de la situation à la mise à disposition d'une ressource humaine selon leurs besoins.
          </motion.p>
          <motion.p
            className="club-actions-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Adhérer à Développement Sport Solutions, ce ne sont que des avantages à travers les actions de :
          </motion.p>
          <ul className="club-actions-list">
            {actionsDeveloppement.map((action, i) => (
              <motion.li
                key={action}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
              >
                <strong>{action}</strong>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce que nous <span className="accent">vous</span> apportons
          </motion.h2>
          <ul className="club-benefices-list">
            {beneficesClub.map((item, i) => (
              <motion.li
                key={item}
                className="club-benefice-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="club-benefice-icon">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* GEIQ / ACI tabs */}
      <section className="section section-alt">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos <span className="accent">dispositifs</span> pour les clubs
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tabs tabs={tabsClub} defaultId="geiq" />
          </motion.div>
        </div>
      </section>

      {/* Les clubs qui nous font confiance */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Les clubs qui nous font <TextReveal text="Confiance" splitBy="char" className="accent" stagger={0.04} />
          </motion.h2>
          <motion.p
            className="club-confiance-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            De nombreux clubs franciliens font confiance à Sport Solutions pour accompagner leur développement et renforcer leurs équipes.
          </motion.p>
        </div>

        {/* Club logos marquee */}
        <motion.div
          className="clubs-marquee"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div className="clubs-marquee__inner" aria-label="Logos des clubs partenaires">
            <ul className="clubs-logos" aria-hidden="true">
              {duplicated.map((club, idx) => (
                <li key={`${club.alt}-${idx}`} className="club-logo-item">
                  <img src={club.src} alt={club.alt} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="section section-alt">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vous avez la moindre question ?
          </motion.h2>
          <motion.div
            className="club-contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="club-contact-item">
              <span className="club-contact-label">Téléphone</span>
              <a href="tel:0184251382">01 84 25 13 82</a>
            </div>
            <div className="club-contact-item">
              <span className="club-contact-label">Email</span>
              <a href="mailto:contact@sportsolutions.fr">contact@sportsolutions.fr</a>
            </div>
            <Link to="/contact" className="btn btn-primary">Contactez-nous</Link>
          </motion.div>
        </div>
      </section>

      <section className="section cta-inline">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Prêt à accueillir un stagiaire-apprenant ou à en savoir plus ?</p>
            <Link to="/contact" className="btn btn-primary">Contactez-nous</Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        .page-hero {
          position: relative;
          min-height: 58vh;
          display: flex;
          align-items: flex-end;
          padding-top: 8rem;
          padding-bottom: 4rem;
          overflow: hidden;
        }
        .page-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .page-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          display: block;
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 15, 38, 0.88) 0%,
            rgba(10, 52, 150, 0.52) 100%
          );
        }
        .page-hero .container { position: relative; z-index: 1; }
        .page-title { font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 0.5rem; letter-spacing: -0.02em; color: #fff; }
        .page-subtitle { font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 600; color: rgba(255,255,255,0.75); }
        .page-subtitle .accent { color: var(--accent-teal); }

        .club-recruit-list { list-style: none; padding: 0; margin: 0; max-width: 800px; margin-inline: auto; }
        .club-recruit-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
        }
        .club-recruit-item:last-child { border-bottom: none; }
        .club-recruit-num {
          flex-shrink: 0;
          width: 2.5rem; height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 50%;
        }
        .club-recruit-item p { margin: 0; color: var(--text-muted); line-height: 1.65; font-size: 1.05rem; }

        .section-alt { background: var(--bg-elevated); }
        .club-exigence {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0 0 1.5rem;
          padding: 1.5rem;
          background: var(--surface);
          border-left: 4px solid var(--accent);
          border-radius: 0 12px 12px 0;
        }
        .club-exigence strong { color: var(--text); }
        .club-accompagnement, .club-actions-intro {
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .club-actions-list { list-style: none; padding: 0; margin: 0; }
        .club-actions-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .club-actions-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }

        .club-benefices-list {
          list-style: none;
          padding: 0; margin: 0;
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 600px) { .club-benefices-list { grid-template-columns: repeat(3, 1fr); } }
        .club-benefice-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 1.05rem;
          color: var(--text);
        }
        .club-benefice-icon { color: var(--accent); font-weight: 700; font-size: 1.25rem; }
        .tab-content { max-width: 640px; }
        .tab-content p { margin-bottom: 1rem; color: var(--text-muted); line-height: 1.65; }
        .tab-content ul { margin: 1rem 0 1.5rem 1.25rem; color: var(--text-muted); }
        .tab-content li { margin-bottom: 0.5rem; }
        .club-confiance-intro { color: var(--text-muted); max-width: 560px; line-height: 1.6; }

        /* Club logos marquee */
        .clubs-marquee {
          margin-top: 2rem;
          padding-inline: clamp(1rem, 5vw, var(--space));
        }
        .clubs-marquee__inner {
          position: relative;
          overflow: hidden;
          padding-block: 1rem;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(219,234,254,0.5));
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .clubs-logos {
          --gap: clamp(1rem, 3vw, 2rem);
          --logo-h: clamp(40px, 6vw, 58px);
          --duration: 40s;
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          animation: clubs-scroll var(--duration) linear infinite;
          will-change: transform;
        }
        @media (hover: hover) {
          .clubs-marquee__inner:hover .clubs-logos { animation-play-state: paused; }
        }
        .club-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(11,29,58,0.07);
          flex-shrink: 0;
        }
        .club-logo-item img {
          height: var(--logo-h);
          width: auto;
          max-width: 100px;
          object-fit: contain;
          filter: grayscale(0.3);
          opacity: 0.9;
          transition: filter 0.25s, opacity 0.25s, transform 0.25s;
        }
        .club-logo-item img:hover {
          filter: none;
          opacity: 1;
          transform: translateY(-2px);
        }
        @keyframes clubs-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .clubs-logos {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
          .clubs-marquee__inner { -webkit-mask-image: none; mask-image: none; }
        }

        /* Contact */
        .club-contact-block { display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; }
        .club-contact-item { display: flex; flex-direction: column; gap: 0.25rem; }
        .club-contact-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .club-contact-item a { font-size: 1.1rem; font-weight: 600; }

        .cta-inline { padding-block: var(--space); }
        .cta-box {
          text-align: center;
          padding: 2rem;
          background: var(--surface);
          border-radius: 16px;
          border: 1px solid var(--border);
        }
        .cta-box p { margin-bottom: 1rem; color: var(--text-muted); }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.8rem;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 999px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-dim); }
      `}</style>
    </div>
  );
}
