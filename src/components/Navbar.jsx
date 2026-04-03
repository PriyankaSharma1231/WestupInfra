import { useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const links = ["Home", "Services", "Blog", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (l) => {
    setMenuOpen(false);
    if (l === "Blog") {
      navigate("/blog");
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(l.toLowerCase())
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(l.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick(l);
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="navbar__cta btn-accent"
        onClick={() => {
          if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          } else {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Enquire Now
      </button>
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
