import { motion } from "framer-motion";

/**
 * Fond animé type "veil" – dégradés blanc / bleu doux, léger mouvement.
 * Inspiré de reactbits.dev/backgrounds/dark-veil, version claire.
 */
export default function BackgroundVeil() {
  return (
    <div className="background-veil" aria-hidden="true">
      <motion.div
        className="veil-gradient veil-gradient-1"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="veil-gradient veil-gradient-2"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          x: ["-10%", "10%", "-10%"],
          y: ["0%", "5%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="veil-gradient veil-gradient-3"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="veil-noise" />
      <style>{`
        .background-veil {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }
        .veil-gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          will-change: transform, opacity;
        }
        .veil-gradient-1 {
          width: 120%;
          height: 80%;
          top: -20%;
          left: -10%;
          background: radial-gradient(
            circle at 30% 40%,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(224, 239, 254, 0.6) 35%,
            rgba(2, 132, 199, 0.12) 60%,
            transparent 75%
          );
        }
        .veil-gradient-2 {
          width: 90%;
          height: 90%;
          top: 10%;
          right: -20%;
          background: radial-gradient(
            circle at 70% 50%,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(240, 247, 255, 0.5) 40%,
            rgba(2, 132, 199, 0.08) 65%,
            transparent 80%
          );
        }
        .veil-gradient-3 {
          width: 80%;
          height: 70%;
          bottom: -15%;
          left: 20%;
          background: radial-gradient(
            circle at 50% 60%,
            rgba(224, 239, 254, 0.5) 0%,
            rgba(2, 132, 199, 0.06) 50%,
            transparent 70%
          );
        }
        .veil-noise {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
