import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import imgHero from "../assets/image/sportsoe.png";

const axesTechniques = [
  "Soudeur",
  "Nageur sauveteur",
  "Restauration",
  "Et bien d'autres métiers spécialisés",
];

const axesTransversaux = [
  "Maîtrise du français",
  "Langues étrangères",
  "Outils informatiques",
  "Posture professionnelle",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay },
});

export default function SSCPage() {
  return (
    <div className="page page-ssc">
      <title>Sport Solutions Compétences | Sport Solutions</title>
      <meta name="description" content="Sport Solutions Compétences (SSC) : co-construire le projet associatif de votre club sportif avec des formations qualifiantes et des leviers de développement innovants." />

      {/* Hero */}
      <section className="page-hero section">
        <div className="page-hero-bg" aria-hidden="true"><img src={imgHero} alt="" /></div>
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Dispositif 03
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sport Solutions{" "}
            <TextReveal text="Compétence" splitBy="char" className="accent-teal" stagger={0.03} />
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Des formations sur mesure, adaptées aux besoins réels du terrain.
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="section section-alt">
        <div className="container">
          <div className="ssc-intro-grid">
            <motion.div className="ssc-intro-text" {...fadeUp(0)}>
              <span className="section-label">Notre histoire</span>
              <h2 className="section-title">
                Né d'un besoin <span style={{ color: "var(--accent-teal)" }}>concret</span>
              </h2>
              <p>
                Sport Solutions Compétence est né d'un besoin concret : accompagner la montée
                en compétences des collaborateurs de Sport Solutions.
              </p>
              <p>
                À partir de cette première offre de formation, pensée comme innovante et
                opérationnelle, l'équipe a progressivement élargi son approche pour répondre
                à des enjeux bien plus larges.
              </p>
              <p>
                Aujourd'hui, SSC s'adresse à <strong>tous les professionnels</strong>, quels que
                soient leur secteur d'activité ou leur métier. L'objectif reste le même : proposer
                des formations adaptées aux besoins réels des entreprises et aux exigences
                spécifiques de chaque environnement professionnel.
              </p>
              <p>
                Grâce à sa capacité d'adaptation, SSC conçoit des <strong>parcours sur mesure</strong>,
                en phase avec les compétences attendues sur le terrain.
              </p>
            </motion.div>

            <motion.div className="ssc-intro-aside" {...fadeUp(0.15)}>
              <div className="ssc-aside-card">
                <span className="ssc-aside-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </span>
                <h3>Notre objectif</h3>
                <p>
                  Proposer des formations adaptées aux besoins réels des entreprises et aux
                  exigences spécifiques de chaque environnement professionnel.
                </p>
              </div>
              <div className="ssc-aside-card">
                <span className="ssc-aside-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </span>
                <h3>Notre approche</h3>
                <p>
                  Concevoir des parcours sur mesure, en phase avec les compétences
                  attendues sur le terrain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les deux axes */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">Notre offre</span>
            <h2 className="section-title">
              Deux grands <span className="accent">axes</span> de formation
            </h2>
            <p className="ssc-axes-intro">
              Chez SSC, les formations s'articulent autour de deux grands axes complémentaires.
            </p>
          </motion.div>

          <div className="ssc-axes-grid">
            <motion.div className="ssc-axe-card ssc-axe-tech" {...fadeUp(0.1)}>
              <div className="ssc-axe-header">
                <span className="ssc-axe-num">01</span>
                <h3>Compétences techniques</h3>
              </div>
              <p className="ssc-axe-desc">
                Directement liées aux métiers, ces formations répondent aux exigences
                spécifiques de chaque secteur professionnel.
              </p>
              <ul className="ssc-axe-list">
                {axesTechniques.map((item) => (
                  <li key={item}>
                    <span className="ssc-axe-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="ssc-axe-card ssc-axe-transversal" {...fadeUp(0.2)}>
              <div className="ssc-axe-header">
                <span className="ssc-axe-num">02</span>
                <h3>Compétences transversales</h3>
              </div>
              <p className="ssc-axe-desc">
                Essentielles au quotidien professionnel, elles renforcent l'efficacité
                et l'intégration dans tous les environnements de travail.
              </p>
              <ul className="ssc-axe-list">
                {axesTransversaux.map((item) => (
                  <li key={item}>
                    <span className="ssc-axe-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="section section-alt">
        <div className="container">
          <motion.div className="ssc-cta-block" {...fadeUp(0)}>
            <div>
              <h2>Vous avez un besoin en formation ?</h2>
              <p>Contactez-nous pour construire un parcours adapté à votre structure.</p>
            </div>
            <Link to="/contact" className="btn btn-teal">Nous contacter</Link>
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
          object-position: center 30%;
          display: block;
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 15, 38, 0.90) 0%,
            rgba(45, 196, 178, 0.35) 100%
          );
        }
        .page-hero .container { position: relative; z-index: 1; }
        .page-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          margin-top: 0.5rem;
          color: #fff;
        }
        .page-hero .section-label {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.25);
          color: var(--accent-teal);
        }
        .accent-teal { color: var(--accent-teal); }
        .page-lead {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.8);
          max-width: 520px;
          line-height: 1.6;
        }

        /* Présentation grid */
        .section-alt { background: var(--bg-elevated); }
        .ssc-intro-grid {
          display: grid;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }
        @media (min-width: 800px) {
          .ssc-intro-grid { grid-template-columns: 1.3fr 1fr; }
        }
        .ssc-intro-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .ssc-intro-text p {
          color: var(--text-muted);
          line-height: 1.7;
        }
        .ssc-intro-text p strong { color: var(--text); font-weight: 600; }

        .ssc-intro-aside {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .ssc-aside-card {
          padding: 1.5rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          border-left: 3px solid var(--accent-teal);
        }
        .ssc-aside-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-teal-dim);
          color: var(--accent-teal);
          margin-bottom: 0.75rem;
          flex-shrink: 0;
        }
        .ssc-aside-card h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .ssc-aside-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Axes */
        .ssc-axes-intro {
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 540px;
          line-height: 1.6;
        }
        .ssc-axes-grid {
          display: grid;
          gap: var(--space);
        }
        @media (min-width: 700px) {
          .ssc-axes-grid { grid-template-columns: 1fr 1fr; }
        }
        .ssc-axe-card {
          display: flex;
          flex-direction: column;
          padding: clamp(1.75rem, 4vw, 2.5rem);
          border-radius: 14px;
          border: 1.5px solid var(--border);
          background: var(--bg-elevated);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .ssc-axe-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(11, 29, 58, 0.08);
        }
        .ssc-axe-tech { border-top: 4px solid var(--accent); }
        .ssc-axe-transversal { border-top: 4px solid var(--accent-teal); }

        .ssc-axe-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .ssc-axe-num {
          font-family: var(--font-display);
          font-size: 2rem;
          line-height: 1;
          color: var(--border);
          flex-shrink: 0;
        }
        .ssc-axe-tech .ssc-axe-num { color: var(--accent-dim); }
        .ssc-axe-transversal .ssc-axe-num { color: var(--accent-teal-dim); }

        .ssc-axe-header h3 {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
          padding-top: 0.2rem;
        }
        .ssc-axe-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .ssc-axe-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .ssc-axe-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .ssc-axe-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ssc-axe-tech .ssc-axe-dot { background: var(--accent); }
        .ssc-axe-transversal .ssc-axe-dot { background: var(--accent-teal); }

        /* CTA */
        .ssc-cta-block {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: clamp(1.75rem, 4vw, 2.5rem);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          border-left: 4px solid var(--accent-teal);
        }
        .ssc-cta-block h2 {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          margin-bottom: 0.4rem;
        }
        .ssc-cta-block p { color: var(--text-muted); font-size: 0.95rem; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.8rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 999px;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .btn-teal {
          background: var(--accent-teal);
          color: #fff;
        }
        .btn-teal:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-teal-dim);
          color: #fff;
        }
      `}</style>
    </div>
  );
}
