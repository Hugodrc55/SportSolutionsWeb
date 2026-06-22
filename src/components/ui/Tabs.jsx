import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Onglets animés (style React Bits).
 * @param {Array<{ id: string, label: string, content: ReactNode }>} tabs
 */
export default function Tabs({ tabs, defaultId }) {
  const [activeId, setActiveId] = useState(defaultId ?? tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            className={`tabs-trigger ${activeId === tab.id ? "active" : ""}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
            {activeId === tab.id && (
              <motion.span
                className="tabs-indicator"
                layoutId="tabs-indicator"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeId}
        className="tabs-panel"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {activeTab?.content}
      </motion.div>
      <style>{`
        .tabs { width: 100%; }
        .tabs-list {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .tabs-trigger {
          position: relative;
          padding: 0.75rem 1.25rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .tabs-trigger:hover { color: var(--text); }
        .tabs-trigger.active { color: var(--accent); }
        .tabs-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          border-radius: 2px 2px 0 0;
        }
        .tabs-panel { min-height: 120px; }
      `}</style>
    </div>
  );
}
