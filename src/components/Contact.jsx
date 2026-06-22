import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({ hideTitle = false }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="contact section" style={{ scrollMarginTop: "5rem" }}>
      <div className="container">
        {!hideTitle && (
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            Contactez-<span className="accent">nous</span>
          </motion.h2>
        )}
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Association loi 1901, Sport Solutions déploie une méthode d'insertion professionnelle innovante et diplômante qui permet aux personnes éloignées de l'emploi d'apprendre un métier en situation de travail et qui répond aux besoins en compétences identifiées des clubs sportifs et collectivités territoriales.
            </p>
            <p className="contact-email">
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
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <p className="form-success">Message envoyé. Nous vous recontacterons rapidement.</p>
            ) : (
              <>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required placeholder="Votre nom" />
                <label htmlFor="email">Adresse e-mail</label>
                <input type="email" id="email" name="email" required placeholder="votre@email.fr" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Votre message" />
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact { background: var(--bg-elevated); }
        .contact-grid {
          display: grid;
          gap: var(--section-pad);
          max-width: 900px;
          margin-inline: auto;
        }
        @media (min-width: 700px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .contact-email {
          margin-top: 1.5rem;
        }
        .contact-email a { color: var(--accent); }
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
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form .btn { align-self: flex-start; }
        .form-success {
          color: var(--accent);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
