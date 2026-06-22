import { motion } from "framer-motion";

import Afdas from "../assets/partenaire/afdas2.png";
import Ceiq from "../assets/partenaire/ceiq.png";
import FseEu from "../assets/partenaire/FR_Co-fundedbytheEU_RGB_POS-1.png";
import HautsDeSeine from "../assets/partenaire/hauts-de-seine.png";
import Forma from "../assets/partenaire/Logo-FORMA.png";
import Paris from "../assets/partenaire/paris2.png";
import Unif from "../assets/partenaire/unif.webp";
import ValDOise from "../assets/partenaire/val-doise.png";
import OcSport from "../assets/partenaire/OCsport.png";

const logos = [
  { src: FseEu, alt: "Cofinancé par l'Union européenne" },
  { src: Afdas, alt: "AFDAS" },
  { src: Ceiq, alt: "CEIQ" },
  { src: Forma, alt: "FORMA" },
  { src: Paris, alt: "Ville de Paris" },
  { src: HautsDeSeine, alt: "Département des Hauts-de-Seine" },
  { src: ValDOise, alt: "Département du Val-d'Oise" },
  { src: Unif, alt: "UNIF" },
];

export default function Partenaires() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="partenaires section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Nos <span className="accent">partenaires</span>
        </motion.h2>
        <motion.p
          className="partenaires-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Sport Solutions œuvre en conventionnement avec le Ministère du travail et en partenariat avec les acteurs du territoire. Nos actions sont cofinancées par le Fonds Social Européen et s'inscrivent dans le paysage du mouvement sportif francilien.
        </motion.p>

        {/* OC Sport habilitation – featured */}
        <motion.div
          className="ocsport-block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <img src={OcSport} alt="OC Sport" className="ocsport-logo" />
          <p className="ocsport-text">
            Habilitation par l'<strong>OC Sport</strong> sous délégation de la <strong>FSCF</strong>
          </p>
        </motion.div>

        <motion.div
          className="partenaires-marquee"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <div className="partenaires-marquee__inner" aria-label="Logos des partenaires">
            <ul className="partenaires-logos" aria-hidden="true">
              {duplicated.map((logo, idx) => (
                <li key={`${logo.alt}-${idx}`} className="partenaires-logo">
                  <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <style>{`
        .partenaires { background: var(--bg); }
        .partenaires-intro {
          color: var(--text-muted);
          max-width: 560px;
          margin-bottom: 1.5rem;
        }

        /* OC Sport highlight */
        .ocsport-block {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 1.5rem;
          background: var(--bg-elevated);
          border: 1.5px solid var(--accent-teal-dim);
          border-left: 4px solid var(--accent-teal);
          border-radius: 12px;
          margin-bottom: 2rem;
          width: fit-content;
        }
        .ocsport-logo {
          height: 52px;
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }
        .ocsport-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }
        .ocsport-text strong { color: var(--text); }

        .partenaires-marquee { margin-top: 1.25rem; }
        .partenaires-marquee__inner {
          position: relative;
          overflow: hidden;
          padding-block: 0.75rem;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(219,234,254,0.6));
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
        }

        .partenaires-logos {
          --gap: clamp(1.5rem, 4vw, 3rem);
          --logo-h: clamp(34px, 5vw, 46px);
          --duration: 28s;

          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          animation: partenaires-marquee var(--duration) linear infinite;
          will-change: transform;
        }

        @media (hover: hover) {
          .partenaires-marquee__inner:hover .partenaires-logos {
            animation-play-state: paused;
          }
        }

        .partenaires-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(11, 29, 58, 0.06);
        }

        .partenaires-logo img {
          height: var(--logo-h);
          width: auto;
          object-fit: contain;
          filter: grayscale(1) contrast(1.05);
          opacity: 0.85;
          transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
        }
        .partenaires-logo img:hover {
          filter: none;
          opacity: 1;
          transform: translateY(-1px);
        }

        @keyframes partenaires-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .partenaires-logos {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
          .partenaires-marquee__inner {
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
    </section>
  );
}
