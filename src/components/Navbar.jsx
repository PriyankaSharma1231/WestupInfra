import { useState } from "react";
import "./Navbar.css";

const links = ["Home", "Services", "Blog", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-text">
          WESTUP <em>INFRA</em>
        </span>
        <span className="navbar__logo-sub">
          Private Limited · Barmer, Rajasthan
        </span>
      </div>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={l === "Blog" ? "/blog" : `#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button className="navbar__cta btn-accent">Enquire Now</button>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
