import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Accordéon animé (style React Bits).
 * @param {Array<{ id: string, title: string, content: ReactNode }>} items
 */
export default function Accordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([]);

  function toggle(id) {
    setOpenIds((prev) =>
      allowMultiple
        ? prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        : prev.includes(id) ? [] : [id]
    );
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="accordion-item">
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
            >
              <span>{item.title}</span>
              <motion.span
                className="accordion-icon"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden
              >
                <span className="accordion-chevron" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="accordion-content">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <style>{`
        .accordion { width: 100%; }
        .accordion-item {
          border-bottom: 1px solid var(--border);
        }
        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.05rem;
          text-align: left;
          color: var(--text);
        }
        .accordion-trigger:hover { color: var(--accent); }
        .accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        .accordion-chevron {
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--text-muted);
          border-bottom: 2px solid var(--text-muted);
          transform: rotate(45deg);
          margin-bottom: 4px;
        }
        .accordion-panel { overflow: hidden; }
        .accordion-content {
          padding-bottom: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
