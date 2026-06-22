import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LogoA.png";

const links = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Espace Candidat", to: "/espace-candidat" },
  { label: "Espace Club", to: "/espace-club" },
  { label: "SSC", to: "/sport-solutions-competence" },
  { label: "Le Mag", to: "/le-mag" },
];

function NavLink({ to, label, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={isActive ? "nav-link active" : "nav-link"}
      >
        {label}
        {isActive && <span className="nav-link-dot" aria-hidden="true" />}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <motion.nav
      className={`nav ${open ? "nav--open" : ""} ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="nav-topbar" aria-hidden="true" />
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img className="nav-logo-img" src={Logo} alt="Sport Solutions" />
          <span className="sr-only">Sport Solutions</span>
        </Link>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="nav-burger-line nav-burger-line--1" data-open={open} />
          <span className="nav-burger-line nav-burger-line--2" data-open={open} />
          <span className="nav-burger-line nav-burger-line--3" data-open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            >
              <div className="nav-mobile-header">
                <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                  <img className="nav-logo-img nav-logo-img--mobile" src={Logo} alt="Sport Solutions" />
                  <span className="sr-only">Sport Solutions</span>
                </Link>
                <button
                  type="button"
                  className="nav-mobile-close"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                >✕</button>
              </div>
              <ul className="nav-mobile-list">
                {[...links, { label: "Contact", to: "/contact" }].map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.3 }}
                  >
                    <Link to={item.to} className="nav-mobile-link" onClick={() => setOpen(false)}>
                      <span className="nav-mobile-num">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.25s, box-shadow 0.25s;
        }
        .nav-topbar {
          height: 3px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-teal) 55%, var(--accent-warm) 100%);
          width: 100%;
        }
        .nav--scrolled {
          background: var(--bg-elevated);
          box-shadow: 0 2px 20px rgba(11, 29, 58, 0.1);
        }
        .nav--open {
          background: var(--bg-elevated);
        }
        .nav:not(.nav--scrolled):not(.nav--open) {
          background: linear-gradient(to bottom, var(--bg) 0%, transparent 100%);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-block: 1.1rem;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .nav-logo-img {
          height: 46px;
          width: auto;
          display: block;
          object-fit: contain;
        }
        .nav-logo-img--mobile {
          height: 42px;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.25));
        }
        .nav-links {
          display: none;
        }
        .nav-link {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.45rem 0.8rem;
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 500;
          font-family: var(--font-heading);
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          color: var(--text);
          background: var(--accent-dim);
        }
        .nav-link.active {
          color: var(--accent);
          font-weight: 700;
        }
        .nav-link-dot {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
        }
        .nav-cta {
          font-size: 0.8rem;
          padding: 0.55rem 1.25rem;
          flex-shrink: 0;
          border-radius: 6px;
        }
        .nav-burger {
          width: 36px;
          height: 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .nav-burger:hover { background: var(--accent-dim); }
        .nav-burger-line {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--text);
          border-radius: 1px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
        }
        .nav-burger-line--2[data-open="true"] { opacity: 0; width: 0; }
        .nav-burger-line--1[data-open="true"] { transform: translateY(7px) rotate(45deg); }
        .nav-burger-line--3[data-open="true"] { transform: translateY(-7px) rotate(-45deg); }
        .nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 22, 41, 0.6);
          backdrop-filter: blur(4px);
          z-index: 98;
        }
        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(380px, 88vw);
          background: var(--navy);
          overflow-y: auto;
          z-index: 99;
          display: flex;
          flex-direction: column;
          padding: 0;
        }
        .nav-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav-mobile-close {
          color: rgba(255,255,255,0.6);
          font-size: 1.1rem;
          padding: 0.4rem 0.6rem;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .nav-mobile-close:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .nav-mobile-list {
          list-style: none;
          padding: 1.5rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0.75rem;
          color: rgba(255, 255, 255, 0.75);
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-mobile-link:hover {
          color: var(--cyan);
          background: rgba(255,255,255,0.05);
        }
        .nav-mobile-num {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-light);
          letter-spacing: 0.08em;
          min-width: 20px;
        }
      `}</style>
    </motion.nav>
  );
}
