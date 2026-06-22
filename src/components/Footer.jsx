import { Link } from "react-router-dom";
import Logo from "../assets/LogoA.png";

const navLinks = [
  { label: "À propos", to: "/a-propos" },
  { label: "Espace Candidat", to: "/espace-candidat" },
  { label: "Espace Club", to: "/espace-club" },
  { label: "Le Mag", to: "/le-mag" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img className="footer-logo-img" src={Logo} alt="Sport Solutions" />
              <span className="sr-only">Sport Solutions</span>
            </Link>
            <p className="footer-tagline">Le sport au service de l'emploi</p>
            <p className="footer-region">Île-de-France · Association loi 1901</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/sportsolutions" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Suivre sur Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/sportsolutions" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Suivre sur Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Navigation secondaire">
            <span className="footer-nav-title">Pages</span>
            <ul className="footer-nav-list">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-legal-block">
            <span className="footer-nav-title">À propos</span>
            <p className="footer-legal-text">
              Association loi 1901, Sport Solutions déploie une méthode d'insertion professionnelle innovante et diplômante qui permet aux personnes éloignées de l'emploi d'apprendre un métier en situation de travail.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© {new Date().getFullYear()} Sport Solutions — Tous droits réservés</p>
          <p className="footer-ministry">Conventionné avec le Ministère du Travail</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--navy);
          position: relative;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--accent), var(--cyan));
        }
        .footer-top {
          padding-block: clamp(3rem, 8vw, 5rem);
        }
        .footer-top-inner {
          display: grid;
          gap: clamp(2rem, 5vw, 3.5rem);
        }
        @media (min-width: 640px) {
          .footer-top-inner { grid-template-columns: 1.4fr 1fr 1.4fr; align-items: start; }
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .footer-logo-img {
          height: 58px;
          width: auto;
          display: block;
          object-fit: contain;
        }
        .footer-tagline {
          color: rgba(255,255,255,0.75);
          font-size: 0.95rem;
          font-weight: 500;
        }
        .footer-region {
          color: rgba(255,255,255,0.38);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          margin-top: 0.1rem;
        }
        .footer-social {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          padding: 0.4rem 0.75rem;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 6px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .footer-social-link:hover {
          color: var(--cyan);
          border-color: rgba(34, 211, 238, 0.3);
          background: rgba(34, 211, 238, 0.06);
        }
        .footer-nav-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1rem;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .footer-nav-link {
          color: rgba(255,255,255,0.65);
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s, padding-left 0.2s;
          display: block;
          padding: 0.2rem 0;
        }
        .footer-nav-link:hover {
          color: var(--cyan);
          padding-left: 4px;
        }
        .footer-legal-text {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.65;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-block: 1.25rem;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-copy {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.28);
        }
        .footer-ministry {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.04em;
        }
      `}</style>
    </footer>
  );
}
