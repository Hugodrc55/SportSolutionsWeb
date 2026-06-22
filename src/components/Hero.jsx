import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal.jsx";
import ScrollIndicator from "./ui/ScrollIndicator.jsx";
import imgHero from "../assets/image/nageuse-sportso-de-dos.webp";

function Hero() {
  return (
    <header id="accueil" className="hero">
      {/* Photo panel */}
      <div className="hero-image-panel" aria-hidden="true">
        <img src={imgHero} alt="" className="hero-img" />
        <div className="hero-img-overlay" />
        <div className="hero-img-fade" />
      </div>

      {/* Geometric accent stripe */}
      <div className="hero-geo" aria-hidden="true" />

      <div className="hero-content container">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="section-label">Île-de-France · Depuis 2018</span>
        </motion.div>

        <h1 className="hero-title">
          <span className="hero-title-line1">
            <TextReveal text="Sport" splitBy="word" stagger={0.06} transition={{ duration: 0.5, delay: 0.3 }} />
          </span>
          <span className="hero-title-line2 accent">
            <TextReveal
              text="Solutions"
              splitBy="char"
              stagger={0.04}
              transition={{ duration: 0.4, delay: 0.45 }}
            />
          </span>
        </h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Le sport au service de l'emploi
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Parcours d'insertion et de qualification dans le sport aquatique &amp; terrestre en Île-de-France.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="/#apropos" className="btn btn-primary">Découvrir</a>
          <a href="/#contact" className="btn btn-ghost">Nous contacter</a>
        </motion.div>

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          aria-hidden="true"
        >
          <span className="hero-badge-inner">
            <span className="hero-badge-num">01</span>
            <span className="hero-badge-text">Association loi<br />1901</span>
          </span>
        </motion.div>
      </div>

      <ScrollIndicator />

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--bg);
        }

        /* Photo panel */
        .hero-image-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 60% center;
          display: block;
        }
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(0,71,171,0.20) 0%, rgba(5,22,41,0.12) 100%);
          pointer-events: none;
        }
        .hero-img-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            var(--bg) 0%,
            rgba(239,246,255,0.75) 28%,
            transparent 58%
          );
          pointer-events: none;
        }

        /* Geometric accent stripe */
        .hero-geo {
          position: absolute;
          top: 0;
          right: 0;
          width: 42vw;
          height: 100%;
          background: linear-gradient(135deg, var(--accent) 0%, #0369A1 100%);
          clip-path: polygon(18% 0, 100% 0, 100% 100%, 0 100%);
          opacity: 0.04;
          z-index: 0;
          pointer-events: none;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: 4rem;
          max-width: var(--max-width);
          text-align: left;
        }
        .hero-eyebrow { margin-bottom: 1.5rem; }
        .hero-title {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(4.5rem, 14vw, 9.5rem);
          letter-spacing: 0.01em;
          line-height: 0.9;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .hero-title-line1 { color: var(--text); }
        .hero-title-line2 { color: var(--accent); }
        .hero-tagline {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .hero-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 2.5rem;
          max-width: 420px;
          line-height: 1.65;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        /* Badge */
        .hero-badge {
          position: absolute;
          bottom: 3.5rem;
          right: clamp(1rem, 5vw, 3rem);
          z-index: 3;
        }
        @media (max-width: 700px) {
          .hero-badge { display: none; }
          .hero-image-panel { width: 100%; }
          .hero-img { opacity: 0.22; }
          .hero-img-fade {
            background: linear-gradient(
              to bottom,
              var(--bg) 0%,
              rgba(239,246,255,0.35) 35%,
              var(--bg) 82%
            );
          }
          .hero-geo { opacity: 0.03; }
        }
        .hero-badge-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          background: var(--bg-elevated);
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,71,171,0.18);
        }
        .hero-badge-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--accent);
          line-height: 1;
        }
        .hero-badge-text {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.4;
        }
      `}</style>
    </header>
  );
}

export default Hero;
