import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import imgPageHero from "../assets/image/sportsoo.png";

const convictions = [
  "Le sport amateur est un vecteur républicain de création de lien social dans nos territoires",
  "Le sport est un secteur économique à part entière offrant aux actifs la sécurité de l'emploi, une évolution et un épanouissement professionnel",
  "L'accompagnement et la montée en compétence permettant la réussite des projets d'insertion et la sécurisation des parcours professionnels tout en garantissant la pérennisation des projets associatifs pour les clubs de nos territoires",
  "Le travail dans la proximité et la co-construction avec les clubs de nos territoires est la seule méthode garantissant des réponses adaptées et innovantes",
];

const dispositifsAPropos = [
  {
    title: "Emploi Sport Solutions",
    desc: "Proposition d'un contrat de travail permettant le retour à l'emploi et une insertion dans le secteur d'activité du sport",
  },
  {
    title: "GEIQ Sport Solutions",
    desc: "Dispositif permettant de contribuer au développement du projet associatif du club tout en sécurisant le parcours professionnel par le biais d'un diplôme d'État",
  },
  {
    title: "Sport Solutions Compétences",
    desc: "Co-construire le projet associatif du club par le biais de leviers de développement",
  },
];

export default function AProposPage() {
  return (
    <div className="page page-about">
      <title>À propos | Sport Solutions</title>
      <meta name="description" content="Découvrez l'histoire, l'équipe et les convictions de Sport Solutions – association loi 1901 pionnière de l'insertion professionnelle par le sport en Île-de-France depuis 2018." />
      <section className="page-hero section">
        <div className="page-hero-bg" aria-hidden="true">
          <img src={imgPageHero} alt="" />
        </div>
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            À <TextReveal text="propos" splitBy="char" className="accent" stagger={0.05} />
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sport Solutions crée des parcours innovants d'insertion et de qualification dans le sport.
          </motion.p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section section-about-history">
        <div className="container about-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Notre <TextReveal text="histoire" splitBy="char" className="accent" stagger={0.04} />
          </motion.h2>
          <motion.p
            className="about-intro"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            L'association Sport Solutions accompagne ceux qui veulent faire du sport leur métier et les acteurs du sport à créer des parcours innovants d'insertion et de qualification dans un secteur qui a besoin de nombreux collaborateurs et qui doit inventer de nouveaux métiers. Association de loi 1901 basée dans le 18ème arrondissement de Paris, Sport Solutions est une équipe d'une dizaine de professionnels convaincus que :
          </motion.p>
          <ul className="about-convictions">
            {convictions.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blocs IDF / structures / héritage */}
      <section className="section section-alt">
        <div className="container about-content">
          <motion.div
            className="about-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2>Depuis 2018 en Île-de-France</h2>
            <p>
              Sport Solutions a mis en place deux parcours d'insertion par l'activité économique dans le secteur <strong>Sport aquatique & terrestre</strong>.
            </p>
            <p>
              Des parcours sur <strong>1 ou 2 ans</strong>, déployés par Emploi Sport Solutions en ACI (Atelier Chantier d'insertion) et par le GEIQ Sport Solutions (Groupement d'employeurs pour l'insertion et la qualification).
            </p>
          </motion.div>
          <motion.div
            className="about-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2>Structures et services</h2>
            <p>
              Sport Solutions est un ensemble de structures associatives qui œuvrent sous conventionnement avec le Ministère du travail. C'est aussi un ensemble d'outils qui se concrétisent par un service aux sports franciliens qui partagent les mêmes problématiques, pour garantir une offre de services sportives de grande qualité aux adhérents dans les territoires, pour proposer un modèle économique pérenne et qui garantisse un accès à la pratique pour tous les publics, en maintenant des tarifs accessibles à chacun.
            </p>
          </motion.div>
          <motion.div
            className="about-block about-heritage"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Héritage Paris 2024</h2>
            <p>
              Par son rôle pionnier dans la création de nouvelles professions au sein du mouvement sportif, par l'impact en termes de structuration du mouvement sportif francilien et de développement de la professionnalisation, Sport Solutions s'inscrit de plein pied dans l'héritage des Jeux Olympiques de Paris 2024.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nos dispositifs */}
      <section className="section section-alt section-dispositifs">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos <TextReveal text="dispositifs" splitBy="char" className="accent" stagger={0.03} />
          </motion.h2>
          <div className="dispositifs-about-grid">
            {dispositifsAPropos.map((d, i) => (
              <motion.div
                key={d.title}
                className="dispositif-about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/espace-candidat" className="btn btn-primary">Espace Candidat</Link>
            <Link to="/espace-club" className="btn btn-ghost">Espace Club</Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container about-contact-cta">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contactez-nous</h2>
            <p>Une question, un projet ? Écrivez-nous ou contactez la presse.</p>
            <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Page hero */
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
          object-position: center 20%;
          display: block;
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 15, 38, 0.90) 0%,
            rgba(10, 52, 150, 0.48) 100%
          );
        }
        .page-hero .container { position: relative; z-index: 1; }
        .page-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .page-lead {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.78);
          max-width: 600px;
        }

        /* Histoire */
        .about-content { max-width: 800px; margin-inline: auto; }
        .section-about-history .about-content { max-width: 720px; }
        .about-intro {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .about-convictions {
          list-style: none;
          padding: 0; margin: 0;
        }
        .about-convictions li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        .about-convictions li::before {
          content: '';
          position: absolute;
          left: 0; top: 0.6em;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        /* Alt blocks */
        .section-alt { background: var(--bg-elevated); }
        .about-block { margin-bottom: var(--section-pad); }
        .about-block h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .about-block p {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .about-block strong { color: var(--text); }
        .about-heritage { margin-bottom: 0; }

        /* Dispositifs */
        .dispositifs-about-grid {
          display: grid;
          gap: var(--space);
          grid-template-columns: 1fr;
        }
        @media (min-width: 700px) {
          .dispositifs-about-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .dispositif-about-card {
          padding: 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .dispositif-about-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .dispositif-about-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .about-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        /* CTA box */
        .about-contact-cta { max-width: 560px; margin-inline: auto; }
        .about-contact-cta .cta-box {
          text-align: center;
          padding: 2.5rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 20px;
        }
        .about-contact-cta .cta-box .section-title { margin-bottom: 0.5rem; }
        .about-contact-cta .cta-box p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        /* Buttons (local override) */
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
        .btn-primary {
          background: var(--accent);
          color: #fff;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-dim);
        }
        .btn-ghost {
          border: 2px solid var(--border);
          color: var(--text);
        }
        .btn-ghost:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}
