import { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal.jsx";
import GradientBlob from "../components/ui/GradientBlob.jsx";

const contactInfos = [
  {
    id: "tel",
    label: "Téléphone",
    value: "01 84 25 13 82",
    href: "tel:0184251382",
    icon: "tel",
  },
  {
    id: "email",
    label: "Email",
    value: "contact@sportsolutions.fr",
    href: "mailto:contact@sportsolutions.fr",
    icon: "email",
  },
  {
    id: "presse",
    label: "Contact Presse",
    value: "com@sportsolutions.fr",
    href: "mailto:com@sportsolutions.fr",
    icon: "presse",
  },
  {
    id: "adresse",
    label: "Adresse",
    value: "12 Rue Boucry, 75018 Paris",
    href: "https://www.google.com/maps/search/?api=1&query=12+Rue+Boucry+75018+Paris",
    icon: "adresse",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page page-contact">
      <title>Contact | Sport Solutions</title>
      <meta name="description" content="Contactez Sport Solutions : téléphone, email, formulaire de contact. Siège social à Paris 18e. Pour tout projet d'insertion par le sport en Île-de-France." />
      <section className="page-hero section page-hero--small">
        <GradientBlob className="page-hero-blob" />
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextReveal text="Contact" splitBy="char" className="accent" stagger={0.04} />
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Une question, un projet ? Écrivez-nous ou contactez la presse.
          </motion.p>
        </div>
      </section>

      {/* Contact rapide - infos */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact <span className="accent">rapide</span>
          </motion.h2>
          <div className="contact-infos-grid">
            {contactInfos.map((item, i) => (
              <motion.div
                key={item.id}
                className="contact-info-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="contact-info-icon" aria-hidden="true">
                  {item.icon === "tel" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.4 3.45 2 2 0 0 1 3.37 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  )}
                  {item.icon === "email" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  )}
                  {item.icon === "presse" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/>
                    </svg>
                  )}
                  {item.icon === "adresse" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  )}
                </span>
                <span className="contact-info-label">{item.label}</span>
                <a
                  href={item.href}
                  target={item.id === "adresse" ? "_blank" : undefined}
                  rel={item.id === "adresse" ? "noopener noreferrer" : undefined}
                  className="contact-info-value"
                >
                  {item.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire Contactez-nous */}
      <section className="section section-alt" id="contactez-nous">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contactez-<span className="accent">nous</span>
          </motion.h2>
          <div className="contact-page-grid">
            <motion.div
              className="contact-legal"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Association loi 1901, Sport Solutions déploie une méthode d'insertion professionnelle innovante et diplômante qui permet aux personnes éloignées de l'emploi d'apprendre un métier en situation de travail et qui répond aux besoins en compétences identifiées des clubs sportifs et collectivités territoriales.
              </p>
              <p className="contact-presse">
                <strong>Contact Presse :</strong><br />
                <a href="mailto:com@sportsolutions.fr">com@sportsolutions.fr</a>
              </p>
            </motion.div>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <p className="form-success">Message envoyé. Nous vous recontacterons rapidement.</p>
              ) : (
                <>
                  <label htmlFor="contact-name">Nom</label>
                  <input type="text" id="contact-name" name="name" required placeholder="Votre nom" />
                  <label htmlFor="contact-email">Adresse e-mail</label>
                  <input type="email" id="contact-email" name="email" required placeholder="votre@email.fr" />
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} required placeholder="Votre message" />
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero--small { min-height: 35vh; padding-top: 6rem; }
        .page-hero {
          position: relative;
          display: flex;
          align-items: center;
        }
        .page-hero-blob {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 50%;
          height: 80%;
          pointer-events: none;
        }
        .page-title { font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 1rem; letter-spacing: -0.02em; }
        .page-lead { font-size: 1.2rem; color: var(--text-muted); max-width: 500px; }

        .contact-infos-grid {
          display: grid;
          gap: var(--space);
          grid-template-columns: 1fr;
        }
        @media (min-width: 500px) { .contact-infos-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 800px) { .contact-infos-grid { grid-template-columns: repeat(4, 1fr); } }
        .contact-info-card {
          padding: 1.5rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--accent-dim, rgba(10,52,150,0.08));
          color: var(--accent);
          flex-shrink: 0;
        }
        .contact-info-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .contact-info-value {
          font-weight: 600;
          color: var(--text);
          font-size: 1rem;
          line-height: 1.4;
        }
        .contact-info-value:hover { color: var(--accent); }

        .section-alt { background: var(--bg-elevated); }
        .contact-page-grid {
          display: grid;
          gap: var(--section-pad);
          max-width: 960px;
          margin-inline: auto;
        }
        @media (min-width: 700px) {
          .contact-page-grid { grid-template-columns: 1fr 1.2fr; align-items: start; }
        }
        .contact-legal p { color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6; }
        .contact-presse { margin-top: 1rem; }
        .contact-presse a { color: var(--accent); }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text);
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: border-color 0.2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form .btn { align-self: flex-start; }
        .form-success { color: var(--accent); font-weight: 500; }
      `}</style>
    </div>
  );
}
