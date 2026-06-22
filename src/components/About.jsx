import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal.jsx";
import imgAbout from "../assets/image/SportSo-IDF.webp";

export default function About() {
  return (
    <section id="apropos" className="about section">
      <div className="container">
        <div className="about-inner">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Qui sommes-nous</span>
            <h2 className="about-title">
              À{" "}
              <TextReveal text="propos" splitBy="char" className="accent" stagger={0.04} />
            </h2>
            <p className="about-body">
              Sport Solutions est un ensemble de structures associatives qui œuvrent sous
              conventionnement avec le <strong>Ministère du travail</strong>. Nous avons créé
              des parcours innovants d'insertion et de qualification qui permettent à une
              population souvent éloignée de l'emploi de se reconstruire et d'entamer ou de
              retrouver une carrière professionnelle.
            </p>
            <div className="about-year-block">
              <span className="about-year">2018</span>
              <span className="about-year-label">Île-de-France</span>
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <div className="about-img-wrapper">
              <img src={imgAbout} alt="Sport Solutions en Île-de-France" className="about-img" />
              <div className="about-img-accent" aria-hidden="true" />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about { background: var(--bg); overflow: visible; }

        .about-inner {
          display: grid;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: center;
        }
        @media (min-width: 760px) {
          .about-inner { grid-template-columns: 1.35fr 1fr; }
        }

        /* Left */
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .about-title {
          font-size: clamp(2.8rem, 5vw, 4rem);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .about-body {
          font-size: clamp(1.05rem, 1.8vw, 1.18rem);
          line-height: 1.8;
          color: var(--text-muted);
        }
        .about-body strong { color: var(--text); font-weight: 600; }
        .about-year-block {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          padding-top: 0.25rem;
          border-top: 2px solid var(--accent-dim);
          width: fit-content;
        }
        .about-year {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 3.5rem);
          line-height: 1;
          color: var(--accent);
          letter-spacing: -0.01em;
        }
        .about-year-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* Right – image */
        .about-right { position: relative; }
        .about-img-wrapper {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          box-shadow: 0 24px 64px rgba(0,71,171,0.13);
        }
        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.55s ease;
        }
        .about-img-wrapper:hover .about-img {
          transform: scale(1.04);
        }
        /* blue accent corner overlay */
        .about-img-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 45%;
          height: 30%;
          background: linear-gradient(135deg, transparent 0%, rgba(0,71,171,0.18) 100%);
          pointer-events: none;
        }

        @media (max-width: 759px) {
          .about-img-wrapper { aspect-ratio: 16/9; }
        }
      `}</style>
    </section>
  );
}
