import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Compteur animé (style React Bits) : monte de 0 à la valeur quand l’élément entre dans le viewport.
 */
export default function AnimatedCounter({
  value,
  duration = 1.5,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  const raw = decimals === 0 ? Math.round(count) : count.toFixed(decimals);
  const display = typeof raw === "number" && raw >= 1000
    ? String(raw).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f")
    : raw;

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}
