import { motion } from "framer-motion";

/**
 * Indicateur de scroll type "mouse" / bounce (inspiré React Bits).
 */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      aria-hidden="true"
    >
      <motion.div
        className="scroll-mouse"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="scroll-wheel" />
      </motion.div>
      <motion.span
        className="scroll-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Défiler
      </motion.span>
      <style>{`
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .scroll-mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(0,0,0,0.2);
          border-radius: 14px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: var(--accent);
          border-radius: 2px;
        }
        .scroll-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
      `}</style>
    </motion.div>
  );
}
