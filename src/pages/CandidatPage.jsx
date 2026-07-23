import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import imgHero from "../assets/image/sportsoat.png";

const benefices = [
  "Bénéficier d'un statut de salarié",
  "S'insérer dans un environnement professionnel",
  "Obtenir un diplôme",
];

const contactsCandidat = [
  { nom: "Delphine Alban", parcours: "Directrice de production", email: "dalban@sportsolutions.fr", tel: "06 15 89 68 23" },
  { nom: "Marlon Mateta", parcours: "Responsable d'équipe 95", email: "mmateta@sportsolutions.fr", tel: "06 03 27 96 80" },
];

const accordionACI = [
  {
    id: "aci-pour-qui",
    title: "Pour qui ?",
    content: (
      <p>Personne plus ou moins éloignée de l'emploi souhaitant se former dans les métiers du sport, demandeuse d'emploi et éligible à l'IAE (Insertion par l'activité économique).</p>
    ),
  },
  {
    id: "aci-duree",
    title: "Durée et contenu du programme",
    content: <p><strong>10 mois</strong> (septembre à juin).</p>,
  },
  {
    id: "aci-missions-multi",
    title: "Les missions (multisports)",
    content: (
      <ul>
        <li>Organisation et encadrement de la pratique sportive</li>
        <li>Mise en place de stages et de tournois</li>
        <li>Gestion de la communication auprès des adhérents</li>
        <li>Gestion administrative (licences, plannings…)</li>
      </ul>
    ),
  },
  {
    id: "aci-missions-natation",
    title: "Les missions (natation)",
    content: (
      <ul>
        <li>Assurer la surveillance et la sécurité des différents publics</li>
        <li>Intervenir auprès des usagers en cas de secours</li>
        <li>Faire respecter le règlement intérieur aux usagers</li>
        <li>Participation aux tâches liées à la gestion d'une structure sportive de natation sous responsabilité : hygiène, sécurité, organisation et surveillance</li>
        <li>Gestion de la communication auprès des adhérents</li>
        <li>Gestion administrative (licences, plannings…)</li>
      </ul>
    ),
  },
  {
    id: "aci-rythme",
    title: "Le rythme",
    content: <p>Formation en alternance à raison de <strong>13h de formation théorique</strong> et <strong>13h de mise en situation de travail</strong> par semaine.</p>,
  },
  {
    id: "aci-diplome",
    title: "Pour quel diplôme ?",
    content: <p>Une qualification de branche ou <strong>BNSSA</strong>.</p>,
  },
  {
    id: "aci-employeur",
    title: "Qui est mon employeur ?",
    content: <p>Mon employeur est Emploi Sport Solutions mais je produis dans un club pour participer à ses activités et son développement.</p>,
  },
  {
    id: "aci-salaire",
    title: "Quel serait le montant de mon salaire ?",
    content: <p>Je suis sous contrat CDDI chez Emploi Sport Solutions et perçois un salaire conventionnel (SMIC horaire pour 26h hebdomadaire).</p>,
  },
  {
    id: "aci-candidater",
    title: "Comment candidater ?",
    content: (
      <>
        <p>Prendre contact avec le responsable d'équipe du département et du parcours qui me correspond et remplir le dossier d'inscription. Être éligible à l'IAE délivré par Pôle Emploi et avoir un casier judiciaire vierge.</p>
        <p className="candidat-contacts-intro"><strong>Contacts par territoire :</strong></p>
        <ul className="candidat-contacts-list">
          {contactsCandidat.map((c) => (
            <li key={c.email}>
              <strong>{c.nom}</strong> – {c.parcours}<br />
              <a href={`mailto:${c.email}`}>{c.email}</a> – <a href={`tel:${c.tel.replace(/\s/g, '')}`}>{c.tel}</a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const accordionGEIQ = [
  {
    id: "geiq-pour-qui",
    title: "Pour qui ?",
    content: (
      <p>Demandeur d'emploi, personne plus ou moins éloignée de l'emploi souhaitant se former dans les métiers du sport, ayant des compétences ou des qualifications pré requises. L'intégration d'un salarié en GEIQ dépend du profil de la personne qui sera évalué lors d'un entretien préalable.</p>
    ),
  },
  {
    id: "geiq-duree",
    title: "Durée et contenu du programme",
    content: <p><strong>12 mois</strong> à partir d'octobre.</p>,
  },
  {
    id: "geiq-missions-multi",
    title: "Les missions (multisports)",
    content: (
      <ul>
        <li>Organisation et encadrement de la pratique sportive</li>
        <li>Mise en place de stages et de tournois</li>
        <li>Gestion de la communication auprès des adhérents</li>
        <li>Gestion administrative (licences, plannings…)</li>
      </ul>
    ),
  },
  {
    id: "geiq-missions-natation",
    title: "Les missions (natation)",
    content: (
      <ul>
        <li>Assurer la surveillance des piscines</li>
        <li>Enseigner la natation à un public scolaire (sous supervision d'un encadrant de l'AMNS)</li>
        <li>Donner des cours particuliers</li>
        <li>Animer des activités de loisirs</li>
        <li>Gestion de la communication auprès des adhérents</li>
        <li>Gestion administrative (licences, plannings…)</li>
      </ul>
    ),
  },
  {
    id: "geiq-rythme",
    title: "Le rythme",
    content: <p>Formation en alternance à raison de <strong>14h de formation théorique</strong> et <strong>16 à 21h de mise en situation de travail</strong> par semaine en fonction du profil du salarié.</p>,
  },
  {
    id: "geiq-diplome",
    title: "Pour quel diplôme ?",
    content: (
      <p>Obtenir un <strong>diplôme d'État Jeunesse, de l'Éducation Populaire et des Sports (BPJEPS)</strong> :<br />• BPJEPS Activités Physiques pour Tous (ANS)<br />• BPJEPS Activités Aquatiques et Natation (AAN)</p>
    ),
  },
  {
    id: "geiq-employeur",
    title: "Qui est mon employeur ?",
    content: <p>Mon employeur est le Groupement d'Employeur Sport Solutions mais je produis dans un club pour participer à ses activités et son développement.</p>,
  },
  {
    id: "geiq-salaire",
    title: "Quel serait le montant de mon salaire ?",
    content: <p>Je suis sous contrat chez GESS et perçois un salaire conventionnel. Le salaire dépend de la situation et du profil de la personne (âge, nombre d'années d'alternance).</p>,
  },
  {
    id: "geiq-candidater",
    title: "Comment candidater ?",
    content: (
      <>
        <p>Prendre contact avec le responsable d'équipe du département et du parcours qui me correspond et remplir le dossier d'inscription.</p>
        <p className="candidat-contacts-intro"><strong>Contacts par territoire :</strong></p>
        <ul className="candidat-contacts-list">
          {contactsCandidat.map((c) => (
            <li key={c.email}>
              <strong>{c.nom}</strong> – {c.parcours}<br />
              <a href={`mailto:${c.email}`}>{c.email}</a> – <a href={`tel:${c.tel.replace(/\s/g, '')}`}>{c.tel}</a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

export default function CandidatPage() {
  return (
    <div className="page page-candidat">
      <title>Espace Candidat | Sport Solutions</title>
      <meta name="description" content="Vous voulez faire du sport votre métier ? Découvrez les dispositifs ACI et GEIQ de Sport Solutions : contrat de travail, diplôme d'État, insertion professionnelle en Île-de-France." />
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
            Espace <TextReveal text="Candidat" splitBy="char" className="accent" stagger={0.04} />
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vous souhaitez faire du sport votre métier ?
          </motion.p>
          <motion.p
            className="page-intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Vous voulez vous former et apprendre un métier dynamique, porté par des valeurs humaines fortes dans un secteur en pleine croissance ? Les dispositifs de Sport Solutions vous permettent de :
          </motion.p>
          <motion.ul
            className="page-benefices"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {benefices.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Dispositif 1 : ACI */}
      <section className="section section-alt">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dispositif 1 : Les Ateliers Chantiers d'Insertion d'<span className="accent">Emploi Sport Solutions</span>
          </motion.h2>
          <motion.div
            className="dispositif-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={accordionACI} allowMultiple />
          </motion.div>
        </div>
      </section>

      {/* Dispositif 2 : GEIQ */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dispositif 2 : <span className="accent">GEIQ Sport Solutions</span>
          </motion.h2>
          <motion.p
            className="dispositif-subtitle"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Groupement d'Employeurs d'Insertion et de Qualification
          </motion.p>
          <motion.div
            className="dispositif-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={accordionGEIQ} allowMultiple />
          </motion.div>
        </div>
      </section>

      {/* Contact rapide */}
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
            className="candidat-contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="candidat-contact-item">
              <span className="candidat-contact-label">Téléphone</span>
              <a href="tel:0184251382">01 84 25 13 82</a>
            </div>
            <div className="candidat-contact-item">
              <span className="candidat-contact-label">Email</span>
              <a href="mailto:contact@sportsolutions.fr">contact@sportsolutions.fr</a>
            </div>
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
          object-position: 60% center;
          display: block;
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 15, 38, 0.92) 0%,
            rgba(10, 52, 150, 0.55) 100%
          );
        }
        .page-hero .container { position: relative; z-index: 1; }
        .page-title { font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 1rem; letter-spacing: -0.02em; color: #fff; }
        .page-lead { font-size: 1.25rem; font-weight: 600; color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; }
        .page-intro { font-size: 1.05rem; color: rgba(255,255,255,0.72); margin-bottom: 1rem; max-width: 640px; }
        .page-benefices { list-style: none; padding: 0; margin: 0; }
        .page-benefices li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: rgba(255,255,255,0.75);
        }
        .page-benefices li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: 700;
        }
        .section-alt { background: var(--bg-elevated); }
        .dispositif-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .dispositif-card {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          padding: 0 1rem;
        }
        .dispositif-card .accordion-item {
          border-bottom: 1px solid var(--border);
        }
        .dispositif-card .accordion-item:last-child { border-bottom: none; }
        .dispositif-card .accordion-trigger { padding: 1rem 0; }
        .dispositif-card .accordion-content ul {
          margin: 0.5rem 0 1rem 1.25rem;
          padding: 0;
        }
        .dispositif-card .accordion-content li { margin-bottom: 0.35rem; }
        .candidat-contacts-intro { margin-top: 1rem; }
        .candidat-contacts-list {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0;
        }
        .candidat-contacts-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border);
        }
        .candidat-contacts-list li:last-child { border-bottom: none; }
        .candidat-contacts-list a { color: var(--accent); }
        .candidat-contact-block {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }
        .candidat-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .candidat-contact-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .candidat-contact-item a {
          font-size: 1.1rem;
          font-weight: 600;
        }
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
        .btn-primary {
          background: var(--accent);
          color: #fff;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-dim);
        }
      `}</style>
    </div>
  );
}
