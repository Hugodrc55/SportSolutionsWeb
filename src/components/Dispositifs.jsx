import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShineCard from "./ui/ShineCard.jsx";

const dispositifs = [
  {
    id: "emploi",
    num: "01",
    title: "Emploi Sport Solutions",
    subtitle: "ACI – Atelier Chantier d'insertion",
    desc: "Proposition d'un contrat de travail permettant le retour à l'emploi et une insertion dans le secteur d'activité du sport.",
    cta: "Espace Candidat",
    to: "/espace-candidat",
    accent: "accent",
  },
  {
    id: "geiq",
    num: "02",
    title: "GEIQ Sport Solutions",
    subtitle: "Groupement d'employeurs pour l'insertion et la qualification",
    desc: "Dispositif permettant de contribuer au développement du projet associatif du club tout en sécurisant le parcours professionnel par le biais d'un diplôme d'État.",
    cta: "Espace Club",
    to: "/espace-club",
    accent: "warm",
  },
  {
    id: "ssc",
    num: "03",
    title: "SSC Sport Solutions",
    subtitle: "Sport Solutions Compétence – Organisme de formation",
    desc: "Des parcours de formation sur mesure pour tous les professionnels — compétences techniques liées aux métiers et compétences transversales essentielles au quotidien professionnel.",
    cta: "En savoir plus",
    to: "/sport-solutions-competence",
    accent: "teal",
  },
];

export default function Dispositifs() {
  return (
    <section className="dispositifs">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Ce que nous proposons</span>
          <h2 className="section-title">
            Nos <span className="accent">dispositifs</span>
          </h2>
        </motion.div>

        <div className="dispositifs-grid">
          {dispositifs.map((item, i) => (
            <ShineCard as={motion.article} key={item.id}
              className={`dispo-card dispo-${item.accent}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="dispo-top">
                <span className="dispo-num">{item.num}</span>
                <div className="dispo-head">
                  <h3 className="dispo-title">{item.title}</h3>
                  <p className="dispo-subtitle">{item.subtitle}</p>
                </div>
              </div>
              <p className="dispo-desc">{item.desc}</p>
              <Link to={item.to} className={`dispo-cta dispo-cta-${item.accent}`}>
                {item.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </ShineCard>
          ))}
        </div>
      </div>

      <style>{`
        .dispositifs {
          background: var(--bg);
          padding-block: var(--section-pad);
        }
        .dispositifs-grid {
          display: grid;
          gap: var(--space);
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .dispositifs-grid {
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }
        }
        @media (min-width: 1000px) {
          .dispositifs-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        /* Card base */
        .dispo-card {
          display: flex;
          flex-direction: column;
          padding: clamp(1.75rem, 4vw, 2.5rem);
          border-radius: 14px;
          border: 1.5px solid var(--border);
          background: var(--bg-elevated);
          position: relative;
          overflow: hidden;
          min-height: 0;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .dispo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(11, 29, 58, 0.1);
        }

        /* Top accent bars */
        .dispo-accent { border-top: 4px solid var(--accent); }
        .dispo-warm   { border-top: 4px solid var(--accent-warm); }
        .dispo-teal   { border-top: 4px solid var(--accent-teal); }
        .dispo-accent:hover { border-color: var(--accent); border-top-color: var(--accent); }
        .dispo-warm:hover   { border-color: var(--accent-warm); border-top-color: var(--accent-warm); }
        .dispo-teal:hover   { border-color: var(--accent-teal); border-top-color: var(--accent-teal); }

        /* Card header */
        .dispo-top {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .dispo-num {
          font-family: var(--font-display);
          font-size: 2rem;
          line-height: 1;
          flex-shrink: 0;
          padding-top: 0.15rem;
        }
        .dispo-accent .dispo-num { color: var(--accent-dim); }
        .dispo-warm .dispo-num   { color: var(--accent-warm-dim); }
        .dispo-teal .dispo-num   { color: var(--accent-teal-dim); }

        .dispo-head { flex: 1; }
        .dispo-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.2vw, 1.65rem);
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 0.3rem;
        }
        .dispo-subtitle {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.02em;
          line-height: 1.4;
        }

        /* Description */
        .dispo-desc {
          flex: 1;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          line-height: 1.65;
          font-size: 0.93rem;
        }

        /* CTA button */
        .dispo-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: auto;
          padding: 0.6rem 1.1rem;
          border-radius: 6px;
          width: fit-content;
          transition: gap 0.2s, transform 0.2s;
        }
        .dispo-cta:hover { gap: 0.75rem; transform: translateX(3px); }
        .dispo-cta-accent { color: var(--accent);       background: var(--accent-dim); }
        .dispo-cta-warm   { color: var(--accent-warm);  background: var(--accent-warm-dim); }
        .dispo-cta-teal   { color: var(--accent-teal);  background: var(--accent-teal-dim); }
        .dispo-cta-accent:hover { color: var(--accent); }
        .dispo-cta-warm:hover   { color: var(--accent-warm); }
        .dispo-cta-teal:hover   { color: var(--accent-teal); }

        /* On tablet, 3rd card spans full row */
        @media (min-width: 640px) and (max-width: 999px) {
          .dispo-card:last-child {
            grid-column: 1 / -1;
            max-width: 50%;
            justify-self: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
