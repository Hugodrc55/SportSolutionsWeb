import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter.jsx";

const stats = [
  { value: 60, suffix: "%", label: "des Franciliens font du sport", sub: "18 – 75 ans, sport amateur IDF" },
  { value: 2.4, suffix: "M", label: "de licences sportives", sub: "" },
  { value: 19800, suffix: "", label: "clubs en Île-de-France", sub: "" },
  { value: 91000, suffix: "+", label: "emplois liés au sport", sub: "" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="stats-label">Le sport en chiffres</span>
          <h2 className="stats-title">Un secteur<br /><span className="stats-title-accent">en pleine expansion</span></h2>
        </motion.div>

        <ul className="stats-grid">
          {stats.map((item, i) => (
            <motion.li
              key={i}
              className="stats-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="stats-num">
                <AnimatedCounter value={item.value} duration={1.8} suffix="" />
                {item.suffix && <span className="stats-suffix-char">{item.suffix}</span>}
              </div>
              <div className="stats-info">
                <span className="stats-label-text">{item.label}</span>
                {item.sub && <span className="stats-sub">{item.sub}</span>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <style>{`
        .stats {
          background: var(--navy);
          padding-block: var(--section-pad);
          position: relative;
          overflow: hidden;
        }
        .stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--accent), var(--cyan));
        }
        .stats::after {
          content: 'SPORT';
          position: absolute;
          right: -2rem;
          bottom: -1.5rem;
          font-family: var(--font-display);
          font-size: clamp(8rem, 20vw, 18rem);
          color: rgba(255,255,255,0.025);
          letter-spacing: 0.05em;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .stats-header {
          margin-bottom: clamp(2rem, 6vw, 4rem);
        }
        .stats-label {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 0.75rem;
        }
        .stats-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1;
        }
        .stats-title-accent { color: var(--cyan); }
        .stats-grid {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        @media (min-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .stats-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          border-right: 1px solid rgba(255,255,255,0.1);
          position: relative;
          transition: background 0.25s;
        }
        .stats-card:hover {
          background: rgba(255,255,255,0.03);
        }
        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--cyan);
          transition: width 0.4s ease;
        }
        .stats-card:hover::before { width: 100%; }
        .stats-num {
          display: flex;
          align-items: baseline;
          gap: 0.1rem;
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 400;
          color: #fff;
          line-height: 1;
          letter-spacing: 0;
        }
        .stats-suffix-char {
          font-size: 0.6em;
          color: var(--cyan);
          letter-spacing: 0;
        }
        .stats-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .stats-label-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          font-weight: 500;
          line-height: 1.4;
        }
        .stats-sub {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
        }
      `}</style>
    </section>
  );
}
