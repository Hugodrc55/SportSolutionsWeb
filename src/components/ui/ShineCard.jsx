import { motion } from "framer-motion";

/**
 * Carte avec effet shine au survol (style React Bits / premium).
 */
export default function ShineCard({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component className={`shine-card ${className}`} {...props}>
      <motion.span
        className="shine-card-shine"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      {children}
      <style>{`
        .shine-card {
          position: relative;
          overflow: hidden;
        }
        .shine-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.15) 45%,
            rgba(255, 255, 255, 0.35) 50%,
            rgba(255, 255, 255, 0.15) 55%,
            transparent 60%,
            transparent 100%
          );
          pointer-events: none;
        }
      `}</style>
    </Component>
  );
}
