import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import ShineCard from "../components/ui/ShineCard.jsx";

import imgHero from "../assets/image/sportsoat.png";
import cover1 from "../assets/image/sport-solutions-le-mag-t1-2023.webp";
import cover2 from "../assets/image/Couv-Mag-2-19.webp";
import cover3 from "../assets/image/Le-Mag3_Couv_VF_Plan-de-travail-1-.webp";
import cover4 from "../assets/image/mag4.png";
import pdf1 from "../assets/mag/Le_Mag_01_2023.pdf";
import pdf2 from "../assets/mag/Sport-Solutions_Le-Mag-2_web.pdf";
import pdf3 from "../assets/mag/Le-Mag-3_VF_180724_WEB_New.pdf";
import pdf4 from "../assets/mag/BAT_Sport-Solutions-Magazine-JANV-FEVR-2026-030226_9358.pdf";

const numeros = [
  {
    id: 1,
    titre: "Le Mag #1",
    cover: cover1,
    pdf: pdf1,
    intro: "Pour cette première édition : Réalisation, féminisation et concrétisation ont été les notes rythmiques jouées par l'équipe de Sport Solutions.",
    sommaire: [
      "Starting-Blocks – Nouvelle saison, retour sur une campagne de recrutement réussie",
      "Des encadrants qui font la différence – Entretien avec Delphine Alban",
      "Succes Story – Erwann Jolivet, de salarié apprenant à formateur",
      "Emploi, sport et genre – Féminisation à géométrie variable",
    ],
    accentVar: "accent",
  },
  {
    id: 2,
    titre: "Le Mag #2",
    cover: cover2,
    pdf: pdf2,
    sommaire: [
      "Sport Solutions se donne les moyens : Nouvelle piscine partenaire à Villejuif",
      "Des encadrants qui font la différence : Léanna Thong Tone",
      "Bénéfices & Héritage des JO de Paris 2024. Quel avenir ?",
      "Succes Story – Vanessa Dos Reis, des rings aux bassins",
      "Saison 23-24 : Campagne de recrutement",
    ],
    accentVar: "warm",
  },
  {
    id: 3,
    titre: "Le Mag #3",
    cover: cover3,
    pdf: pdf3,
    sommaire: [
      "Focus – Le Sport Santé : Sport Solutions mène la charge en Île-de-France",
      "Des encadrants qui font la différence : Les CIP, piliers du développement RH chez Sport Solutions",
      "SROI Horizon 2026 : L'innovation au service d'un impact social mesurable",
      "Succes Story – Anthony Dupont : De la passion du foot à l'encadrement culturel et sportif",
      "Un Club, une vision, un partenaire : L'AAS Sarcelles Football Club",
    ],
    accentVar: "teal",
  },
  {
    id: 4,
    titre: "Le Mag #4",
    cover: cover4,
    pdf: pdf4,
    intro: "Janvier–Février 2026 : sport santé, féminisation des métiers et les nouveaux terrains de l'emploi.",
    sommaire: [
      "Bilan & Perspectives – Après un bel élan en 2025, l'accélération en 2026",
      "Sport Santé – Élargir le terrain de jeu : de nouvelles perspectives pour l'insertion",
      "La place des femmes dans le sport – Égalité, mixité, inclusion : cap sur 2026",
      "Success Story – Enzo Adam : « Avec Sport Solutions, j'ai transformé ma passion en métier »",
      "Entretien – L'insertion, une alliance des territoires : regards croisés avec nos partenaires institutionnels",
    ],
    accentVar: "warm",
  },
];

export default function LeMagPage() {
  return (
    <div className="page page-mag">
      <title>Le Mag | Sport Solutions</title>
      <meta name="description" content="Retrouvez les numéros du magazine Sport Solutions : actualités, témoignages et décryptages sur l'insertion professionnelle par le sport en Île-de-France." />
      <section className="page-hero section">
        <div className="page-hero-bg" aria-hidden="true">
          <img src={imgHero} alt="" />
        </div>
        <div className="container">
          <motion.h1
            className="page-title mag-main-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Le nouveau Mag de l'insertion par l'activité économique dans le{" "}
            <TextReveal text="sport" splitBy="char" className="accent" stagger={0.04} />
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sport Solutions lance son Mag !
          </motion.p>
          <motion.p
            className="page-intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Une nouvelle newsletter pensée pour vous tenir au courant des dernières nouveautés dans le monde de l'insertion professionnelle par le Sport et surtout pour mettre en avant les sujets qui nous tiennent à cœur.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Découvrez <span className="accent">nos numéros</span>
          </motion.h2>
          <div className="mag-numeros">
            {numeros.map((num, i) => (
              <ShineCard
                as={motion.article}
                key={num.id}
                className={`mag-numero-card mag-card--${num.accentVar}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Cover image */}
                <a
                  href={num.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mag-cover-link"
                  aria-label={`Lire ${num.titre}`}
                >
                  <div className="mag-cover-wrapper">
                    {num.cover
                      ? <img src={num.cover} alt={`Couverture ${num.titre}`} className="mag-cover" />
                      : <div className="mag-cover-placeholder"><span>{num.titre}</span></div>
                    }
                    <div className="mag-cover-hover">
                      <span className="mag-cover-hover-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="9" y1="13" x2="15" y2="13"/>
                          <line x1="9" y1="17" x2="15" y2="17"/>
                        </svg>
                      </span>
                      <span>Ouvrir le PDF</span>
                    </div>
                  </div>
                </a>

                <div className="mag-card-body">
                  <h3 className="mag-numero-titre">{num.titre}</h3>
                  {num.intro && <p className="mag-numero-intro">{num.intro}</p>}
                  <p className="mag-numero-sommaire-label">Au sommaire :</p>
                  <ul className="mag-numero-sommaire">
                    {num.sommaire.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={num.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mag-numero-btn mag-btn--${num.accentVar}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    Lire le Mag
                  </a>
                </div>
              </ShineCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt cta-inline">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Pour recevoir le Mag et nos actualités, contactez-nous ou suivez-nous sur nos réseaux.</p>
            <a href="mailto:contact@sportsolutions.fr" className="btn btn-primary">contact@sportsolutions.fr</a>
          </motion.div>
        </div>
      </section>

      <style>{`
        .page-hero {
          position: relative;
          min-height: 55vh;
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
          object-position: center 25%;
          display: block;
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 15, 38, 0.92) 0%,
            rgba(10, 52, 150, 0.5) 100%
          );
        }
        .page-hero .container { position: relative; z-index: 1; }
        .mag-main-title { font-size: clamp(1.75rem, 4vw, 2.75rem); line-height: 1.2; color: #fff; }
        .page-title { margin-bottom: 1rem; letter-spacing: -0.02em; }
        .page-lead { font-size: 1.25rem; font-weight: 600; color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; }
        .page-intro { font-size: 1.05rem; color: rgba(255,255,255,0.72); max-width: 640px; line-height: 1.6; }

        .mag-numeros {
          display: grid;
          gap: var(--space);
          grid-template-columns: 1fr;
        }
        @media (min-width: 800px) { .mag-numeros { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .mag-numeros { grid-template-columns: repeat(3, 1fr); } }

        .mag-numero-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
        }
        .mag-card--accent { border-top: 4px solid var(--accent); }
        .mag-card--warm   { border-top: 4px solid var(--accent-warm); }
        .mag-card--teal   { border-top: 4px solid var(--accent-teal); }

        /* Cover image */
        .mag-cover-link { display: block; }
        .mag-cover-wrapper {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--surface);
        }
        .mag-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.45s ease;
        }
        .mag-cover-link:hover .mag-cover { transform: scale(1.04); }
        .mag-cover-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--navy-mid) 0%, var(--accent) 100%);
          color: rgba(255,255,255,0.85);
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .mag-cover-hover {
          position: absolute;
          inset: 0;
          background: rgba(5, 22, 41, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .mag-cover-link:hover .mag-cover-hover { opacity: 1; }
        .mag-cover-hover-icon { color: #fff; }

        /* Card body */
        .mag-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: clamp(1.25rem, 3vw, 1.75rem);
        }
        .mag-numero-titre {
          font-size: clamp(1.15rem, 1.5vw, 1.35rem);
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .mag-numero-intro {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .mag-numero-sommaire-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }
        .mag-numero-sommaire {
          list-style: none;
          padding: 0; margin: 0 0 1.5rem;
          flex: 1;
        }
        .mag-numero-sommaire li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .mag-numero-sommaire li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .mag-card--warm .mag-numero-sommaire li::before { color: var(--accent-warm); }
        .mag-card--teal .mag-numero-sommaire li::before { color: var(--accent-teal); }

        .mag-numero-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mag-btn--accent { background: var(--accent-dim); color: var(--accent); }
        .mag-btn--warm   { background: var(--accent-warm-dim); color: var(--accent-warm); }
        .mag-btn--teal   { background: var(--accent-teal-dim); color: var(--accent-teal); }
        .mag-numero-btn:hover { transform: translateY(-2px); }

        .section-alt { background: var(--bg-elevated); }
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
