import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShineCard from "./ui/ShineCard.jsx";

const ctas = [
  {
    id: "club",
    eyebrow: "Pour les clubs",
    title: "Dirigeants, misez sur l'humain pour développer votre structure sportive !",
    desc: "Votre volonté est de développer l'activité de votre structure, vos ressources et vos compétences. Vous souhaitez avoir des éducateurs diplômés et renforcer le modèle économique de votre club. Sport Solutions met à votre disposition un stagiaire-apprenant que nous salarions et un accompagnement pour développer, au sein de votre structure, les compétences spécifiques et durables dont vous avez réellement besoin.",
    label: "Espace Club",
    to: "/espace-club",
    dark: true,
  },
  {
    id: "candidat",
    eyebrow: "Pour les candidats",
    title: "Vous recherchez un emploi et vous voulez faire du sport votre métier ?",
    desc: "Découvrez nos deux dispositifs qui vous permettent de décrocher un diplôme d'État dans le sport tout en sécurisant votre parcours par un statut de salarié.",
    label: "Espace Candidat",
    to: "/espace-candidat",
    dark: false,
  },
];

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-grid">
          {ctas.map((item, i) => (
            <ShineCard as={motion.div}
              key={item.id}
              id={item.id}
              className={`cta-block ${item.dark ? "cta-block--dark" : "cta-block--light"}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className={`cta-eyebrow ${item.dark ? "cta-eyebrow--dark" : ""}`}>
                {item.eyebrow}
              </span>
              <h2 className="cta-title">{item.title}</h2>
              <p className="cta-desc">{item.desc}</p>
              <Link
                to={item.to}
                className={`btn ${item.dark ? "btn-cyan" : "btn-primary"}`}
              >
                {item.label}
              </Link>
            </ShineCard>
          ))}
        </div>
      </div>

      <style>{`
        .cta-section { padding-block: var(--section-pad); background: var(--bg); }
        .cta-grid {
          display: grid;
          gap: var(--space);
          grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
          .cta-grid { grid-template-columns: 1fr 1fr; align-items: stretch; }
        }
        .cta-block {
          display: flex;
          flex-direction: column;
          padding: clamp(2rem, 5vw, 3.5rem);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .cta-block--dark {
          background: var(--navy);
          border: none;
        }
        .cta-block--light {
          background: var(--bg-elevated);
          border: 1.5px solid var(--border);
        }
        .cta-block--light:hover {
          box-shadow: 0 16px 48px rgba(11, 29, 58, 0.1);
          transform: translateY(-4px);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cta-block--dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--accent), var(--cyan));
        }
        .cta-eyebrow {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
          padding: 0.3rem 0.7rem;
          border: 1.5px solid var(--accent-dim);
          border-radius: 4px;
          background: var(--accent-dim);
          width: fit-content;
        }
        .cta-eyebrow--dark {
          color: var(--cyan);
          border-color: rgba(34, 211, 238, 0.25);
          background: rgba(34, 211, 238, 0.12);
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2.2vw, 1.65rem);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 1rem;
          overflow-wrap: break-word;
        }
        .cta-block--dark .cta-title { color: #fff; }
        .cta-block--light .cta-title { color: var(--text); }
        .cta-desc {
          flex: 1;
          font-size: 0.95rem;
          line-height: 1.65;
          margin-bottom: 2rem;
          overflow-wrap: break-word;
        }
        .cta-block--dark .cta-desc { color: rgba(255,255,255,0.62); }
        .cta-block--light .cta-desc { color: var(--text-muted); }
        .cta-block .btn {
          width: fit-content;
          margin-top: auto;
          font-family: var(--font-heading);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
