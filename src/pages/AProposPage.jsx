import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import imgPageHero from "../assets/image/sportsoo.png";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function getInitials(nom) {
  return nom.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

const convictions = [
  "Le sport amateur est un vecteur républicain de création de lien social dans nos territoires",
  "Le sport est un secteur économique à part entière offrant aux actifs la sécurité de l'emploi, une évolution et un épanouissement professionnel",
  "L'accompagnement et la montée en compétence permettant la réussite des projets d'insertion et la sécurisation des parcours professionnels tout en garantissant la pérennisation des projets associatifs pour les clubs de nos territoires",
  "Le travail dans la proximité et la co-construction avec les clubs de nos territoires est la seule méthode garantissant des réponses adaptées et innovantes",
];

const equipeDirection = [
  { nom: "Nadhem Kherigi", role: "Président", linkedin: true },
  { nom: "Guillaume Balland", role: "Directeur Général" },
  { nom: "Léanna Thong Tone", role: "Directrice Executive" },
  { nom: "Michel Leroy", role: "Secrétaire Général" },
];

const equipeAdmin = [
  { nom: "Julien Meallet", role: "Gestion Comptabilité" },
  { nom: "Martine Zevo", role: "Comptable" },
  { nom: "Ewen Leaustic", role: "Chargé Institutionnel" },
  { nom: "Malvina Raych", role: "Consultante Sport" },
];

const equipeProduction = [
  { nom: "Delphine Alban", role: "Directrice de Production" },
  { nom: "Badialla Camara", role: "Responsable Territoire 94" },
  { nom: "Jason Gnali", role: "Responsable Territoire 75" },
  { nom: "Fatoumata Gory", role: "Responsable Territoire 93" },
  { nom: "Valentin Remond", role: "Responsable Territoire 78" },
  { nom: "Suzanne Durand-Blanckson", role: "Responsable Territoire 92" },
  { nom: "Marlon Mateta", role: "Responsable Territoire 95" },
];

const equipePedagogie = [
  { nom: "Anne-Laure Carrera Y Orellana", role: "Responsable Pédagogique" },
  { nom: "Cecilia Bessah", role: "Chargée d'accompagnement RH" },
  { nom: "Romane Verrier", role: "Chargée d'accompagnement RH" },
  { nom: "Belinda Couvert", role: "Chargée d'accompagnement RH" },
  { nom: "Pécilia Schmitt", role: "Chargée d'accompagnement RH" },
];

const equipeRhQualiteCip = [
  { nom: "Hugo Oliveira", role: "Responsable RH" },
  { nom: "Tiphaine Camara", role: "Responsable Qualité" },
  { nom: "Najwa Khalifa", role: "Responsable CIP" },
  { nom: "Sarah Titti Priso", role: "Conseillère en insertion professionnelle" },
  { nom: "Emma Lemarchand", role: "Conseillère en insertion professionnelle" },
  { nom: "Rosana Li", role: "Conseillère en insertion professionnelle" },
  { nom: "Dian Kante", role: "Conseillère en insertion professionnelle" },
  { nom: "Henri-Joseph Guezo", role: "Conseiller en insertion professionnelle" },
  { nom: "Antoine Kihoulou", role: "Conseiller en insertion professionnelle" },
];

const equipeCommunication = [
  { nom: "Eden Cungic", role: "Chargée de Communication" },
  { nom: "Léa Chaulvet", role: "Chargée de Communication" },
  { nom: "Lisa Da Veiga", role: "Chargée de Communication Audiovisuel" },
];

const collegeExpert = [
  { nom: "Océane Launay", role: "Directrice des Ressources Humaines, FF Basket" },
  { nom: "Alice Lebeau", role: "Directrice de la formation, FF Montagne & Escalade" },
  { nom: "Didier Baisnee", role: "Expert au développement des associations sportives" },
  { nom: "Vincent Deriencourt", role: "Responsable Relations Branches Professionnelles, Contructys" },
  { nom: "Nicolas Molina", role: "Directeur adjoint, CNOSF" },
  { nom: "Youri Durand", role: "Consultant en stratégie et innovation dédié aux acteurs du sport" },
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

      {/* La Team */}
      <section className="section section-team">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            La <TextReveal text="Team" splitBy="char" className="accent" stagger={0.04} />
          </motion.h2>
          {[
            { label: "Direction", data: equipeDirection, variant: "" },
            { label: "Administration & Gestion", data: equipeAdmin, variant: "--admin" },
            { label: "Production – Emploi", data: equipeProduction, variant: "--prod" },
            { label: "Pédagogie", data: equipePedagogie, variant: "--peda" },
            { label: "RH · Qualité · CIP", data: equipeRhQualiteCip, variant: "--rh" },
            { label: "Communication", data: equipeCommunication, variant: "--com" },
          ].map(({ label, data, variant }) => (
            <div key={label}>
              <motion.h3
                className="team-subtitle"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {label}
              </motion.h3>
              <ul className="team-grid">
                {data.map((personne, i) => (
                  <motion.li
                    key={personne.nom}
                    className={`team-card team-card${variant}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.025 * i }}
                  >
                    <div className={`team-avatar team-avatar${variant}`}>{getInitials(personne.nom)}</div>
                    <div className="team-info">
                      <span className="team-name">{personne.nom}</span>
                      <span className="team-role">{personne.role}</span>
                    </div>
                    {personne.linkedin && (
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-linkedin"
                        aria-label={`LinkedIn de ${personne.nom}`}
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <motion.h3
            className="team-subtitle team-subtitle--expert"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Membres du collège expert
          </motion.h3>
          <ul className="team-grid">
            {collegeExpert.map((personne, i) => (
              <motion.li
                key={personne.nom}
                className="team-card team-card--expert"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
              >
                <div className="team-avatar team-avatar--expert">{getInitials(personne.nom)}</div>
                <div className="team-info">
                  <span className="team-name">{personne.nom}</span>
                  <span className="team-role">{personne.role}</span>
                </div>
              </motion.li>
            ))}
          </ul>
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

        /* Team */
        .section-team { background: var(--bg); }
        .team-subtitle {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 2rem 0 1.25rem;
        }
        .team-subtitle--expert { margin-top: 3.5rem; }

        .team-grid {
          list-style: none;
          padding: 0; margin: 0;
          display: grid;
          gap: 0.65rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 500px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .team-card {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 0.875rem 1rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-left: 3px solid transparent;
          border-radius: 10px;
          transition: border-left-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .team-card:hover {
          border-left-color: var(--accent);
          transform: translateX(4px);
          box-shadow: 0 4px 18px rgba(0,71,171,0.08);
        }

        .team-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--accent-dim);
          color: var(--accent);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        /* avatar color variants per group */
        .team-avatar--admin { background: rgba(245,166,35,0.12); color: #C17B00; }
        .team-avatar--prod  { background: rgba(45,196,178,0.12); color: #1A8C7E; }
        .team-avatar--peda  { background: rgba(0,71,171,0.12);   color: var(--accent); }
        .team-avatar--rh    { background: rgba(232,82,74,0.12);   color: #C0392B; }
        .team-avatar--com   { background: rgba(89,74,232,0.12);   color: #5B4BE0; }
        .team-avatar--expert { background: var(--accent-warm-dim); color: var(--accent-warm); }

        /* card left-border per group */
        .team-card--admin:hover  { border-left-color: #C17B00; }
        .team-card--prod:hover   { border-left-color: #1A8C7E; }
        .team-card--peda:hover   { border-left-color: var(--accent); }
        .team-card--rh:hover     { border-left-color: #C0392B; }
        .team-card--com:hover    { border-left-color: #5B4BE0; }
        .team-card--expert:hover { border-left-color: var(--accent-warm); }

        .team-info {
          flex: 1;
          min-width: 0;
        }
        .team-name {
          display: block;
          font-weight: 700;
          color: var(--text);
          font-size: 0.9rem;
          line-height: 1.3;
        }
        .team-role {
          display: block;
          font-size: 0.77rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-top: 0.1rem;
        }

        .team-linkedin {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          transition: color 0.2s;
          flex-shrink: 0;
          padding: 0.3rem;
          border-radius: 4px;
        }
        .team-linkedin:hover {
          color: #0077B5;
          background: rgba(0,119,181,0.08);
        }

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
