import { motion } from "framer-motion";

/**
 * Animation type "React Bits" : révèle le texte par mots ou caractères avec stagger.
 * @param {string} text - Texte à animer
 * @param {"word"|"char"} splitBy - "word" ou "char"
 * @param {object} className - Classe CSS pour le conteneur
 * @param {object} wordProps / charProps - Props Framer Motion pour chaque élément
 */
export default function TextReveal({
  text,
  splitBy = "word",
  className = "",
  initial = { opacity: 0, y: 24 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.4 },
  stagger = 0.03,
}) {
  const parts = splitBy === "char" ? text.split("") : text.split(/\s+/);
  const isChar = splitBy === "char";

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          initial={initial}
          animate={animate}
          transition={{ ...transition, delay: i * stagger }}
          style={{
            display: "inline-block",
            whiteSpace: isChar ? "nowrap" : "normal",
            marginRight: isChar ? "0" : "0.28em",
          }}
        >
          {part}
          {!isChar && i < parts.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </span>
  );
}
