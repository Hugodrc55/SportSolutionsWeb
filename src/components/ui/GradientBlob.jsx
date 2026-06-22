import { motion } from "framer-motion";

/**
 * Blob gradient décoratif (style React Bits) – arrière-plan doux.
 */
export default function GradientBlob({ className = "", ...props }) {
  return (
    <motion.div
      className={`gradient-blob ${className}`}
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-hidden="true"
      {...props}
    >
      <style>{`
        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          background: radial-gradient(
            circle,
            var(--accent-dim) 0%,
            var(--accent-warm-dim) 50%,
            transparent 70%
          );
        }
      `}</style>
    </motion.div>
  );
}
