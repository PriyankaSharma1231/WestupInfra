import './Footer.css';

const links = ['Home', 'Services', 'Projects', 'About', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">WESTUP <em>INFRA</em> PVT. LTD.</div>
          <div className="footer__tagline">Utility-Scale Solar EPC · Barmer, Rajasthan</div>
          <div className="footer__cin">CIN: U41001RJ2025PTC102845 · MCA Active</div>
        </div>

        <div className="footer__nav">
          <span className="footer__nav-label">Quick Links</span>
          <ul>
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <span className="footer__nav-label">Contact</span>
          <p>Azad Chowk, Barmer</p>
          <p>Rajasthan — 344001, India</p>
          <a href="westupinfra.pvt.ltd@gmail.com" className="footer__email">
          +91 8619579983,   westupinfra.pvt.ltd@gmail.com
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Westup Infra Private Limited. All rights reserved.</p>
        <p>Incorporated under the Companies Act, 2013 · ROC Jaipur</p>
      </div>
    </footer>
  );
}
