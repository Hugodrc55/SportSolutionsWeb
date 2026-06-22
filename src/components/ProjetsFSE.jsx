import { motion } from "framer-motion";
import ShineCard from "./ui/ShineCard.jsx";
import frEULogo from "../assets/partenaire/FR_Co-fundedbytheEU_RGB_POS-1.png";

const projetsFSE = [
  {
    id: "aci-78",
    title: "ACI SPORT SOLUTIONS 78 – ACCOMPAGNEMENT IMPACT PRO",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'actions de formations pour répondre aux exigences d'un secteur règlementé : le Sport.",
    duree: "07/2023 – 06/2025",
    budget: "154 134,17 €",
    financementUE: "61 653,66 €",
  },
  {
    id: "aci-92-1",
    title: "ACI SPORT SOLUTIONS 92 – ACCOMPAGNEMENT IMPACT PRO",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'action de formations pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "07/2023 – 12/2024",
    budget: "422 881,38 €",
    financementUE: "67 701,95 €",
  },
  {
    id: "aci-94-1",
    title: "ACI SPORT SOLUTIONS 94 – ACCOMPAGNEMENT IMPACT PRO",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'action de formations pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "01/2023 – 12/2024",
    budget: "518 788,06 €",
    financementUE: "40 542,23 €",
  },
  {
    id: "aci-92-plie",
    title: "ACI SPORT SOLUTIONS 92 – ACCOMPAGNEMENT IMPACT PRO – 2025",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes des PLIE de Gennevilliers et de Colombes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'action de formations pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "01/2025 – 12/2025",
    budget: "241 373,34 €",
    financementUE: "93 246,26 €",
  },
  {
    id: "aci-92-hors-plie",
    title: "ACI SPORT SOLUTIONS 92 – (Hors PLIE)",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes alto-séquanaises (HORS PLIE) fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'action de formations pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "01/2025 – 12/2025",
    budget: "245 225,67 €",
    financementUE: "98 007,61 €",
  },
  {
    id: "aci-75",
    title: "ACI SPORT SOLUTIONS 75 – Impact Insertion EMPLOI",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport, et en particulier la natation. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'actions de formation pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "09/2025 – 12/2027",
    budget: "406 124,67 €",
    financementUE: "45 601,26 €",
  },
  {
    id: "aci-93",
    title: "ACI SPORT SOLUTIONS 93 – NATATION – ACCOMPAGNEMENT Impact PRO – 2025",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport, et en particulier la natation. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'actions de formation pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "01/2025 – 12/2025",
    budget: "305 610,32 €",
    financementUE: "35 000,00 €",
  },
  {
    id: "aci-94-2025",
    title: "ACI SPORT SOLUTIONS 94 – 2025 – Impact SOCIO – PROFESSIONNEL",
    desc: "L'action cofinancée par le Fonds Social Européen permet à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport, et en particulier la natation. Ce parcours est composé d'un accompagnement socio-professionnel renforcé, d'actions de production et d'actions de formation pour répondre aux exigences d'un secteur réglementé : le Sport.",
    duree: "01/2025 – 12/2025",
    budget: "357 945,32 €",
    financementUE: "53 691,79 €",
  },
];

export default function ProjetsFSE() {
  return (
    <section className="projets-fse section" id="projets-fse">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Actions cofinancées par le <span className="accent">Fonds Social Européen</span>
        </motion.h2>
        <motion.p
          className="projets-fse-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Les actions ci-dessous sont cofinancées par le Fonds Social Européen. Elles permettent à des personnes fortement éloignées de l'emploi de suivre un parcours d'insertion dans le secteur du sport en Île-de-France.
        </motion.p>
        <div className="projets-fse-grid">
          {projetsFSE.map((projet, i) => (
            <ShineCard
              as={motion.article}
              key={projet.id}
              className="projet-fse-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="projet-fse-title">{projet.title}</h3>
              <p className="projet-fse-desc">{projet.desc}</p>
              <dl className="projet-fse-meta">
                <div>
                  <dt>Durée</dt>
                  <dd>{projet.duree}</dd>
                </div>
                <div>
                  <dt>Budget total</dt>
                  <dd>{projet.budget}</dd>
                </div>
                <div>
                  <dt>Financement UE</dt>
                  <dd>{projet.financementUE}</dd>
                </div>
              </dl>
              <div className="projet-fse-eu">
                <a
                  href="https://www.europe-en-france.gouv.fr/fr/fonds-europeens-2021-2027/fonds-social-europeen-plus-FSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projet-fse-eu-link"
                  title="En savoir plus sur le Fonds Social Européen+"
                >
                  <img src={frEULogo} alt="Co-financé par l'Union Européenne – FSE+" className="projet-fse-eu-logo" />
                </a>
              </div>
            </ShineCard>
          ))}
        </div>
      </div>

      <style>{`
        .projets-fse { background: var(--bg); }
        .projets-fse-intro {
          color: var(--text-muted);
          max-width: 640px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .projets-fse-grid {
          display: grid;
          gap: clamp(1.5rem, 4vw, 2.5rem);
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .projets-fse-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1200px) {
          .projets-fse-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .projet-fse-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          min-height: 0;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .projet-fse-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          border-color: var(--accent-dim);
        }
        .projet-fse-card::before {
          content: '';
          display: block;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent-warm));
          flex-shrink: 0;
        }
        .projet-fse-title {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          font-weight: 700;
          margin: 0;
          padding: 1.5rem clamp(1.5rem, 4vw, 2.25rem) 1rem;
          color: var(--text);
          line-height: 1.4;
          overflow-wrap: break-word;
          letter-spacing: -0.01em;
        }
        .projet-fse-desc {
          flex: 1;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0;
          padding: 0 clamp(1.5rem, 4vw, 2.25rem) 1.25rem;
          overflow-wrap: break-word;
        }
        .projet-fse-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin: 0;
          margin-top: auto;
          background: rgba(0, 0, 0, 0.02);
          padding: 1.25rem clamp(1.5rem, 4vw, 2.25rem) !important;
          border-radius: 0 0 20px 20px;
        }
        .projet-fse-meta div {
          padding: 0 0.75rem;
          border: none;
          min-width: 0;
        }
        .projet-fse-meta div:not(:last-child) {
          border-right: 1px solid var(--border);
        }
        .projet-fse-meta dt {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
          font-weight: 600;
        }
        .projet-fse-meta dd {
          margin: 0;
          font-weight: 600;
          color: var(--accent);
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (max-width: 500px) {
          .projet-fse-meta {
            grid-template-columns: 1fr;
            padding: 1rem !important;
          }
          .projet-fse-meta div:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.75rem;
            margin-bottom: 0.5rem;
          }
        }
        .projet-fse-eu {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem clamp(1.5rem, 4vw, 2.25rem);
          border-top: 1px solid var(--border);
        }
        .projet-fse-eu-link {
          display: inline-flex;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .projet-fse-eu-link:hover {
          opacity: 1;
        }
        .projet-fse-eu-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
          display: block;
        }
      `}</style>
    </section>
  );
}
