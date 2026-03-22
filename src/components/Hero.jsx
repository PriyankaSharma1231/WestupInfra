import "./Hero.css";

const metrics = [
  { num: "100+", unit: "", label: "Skilled Manpower On Ground" },
  { num: "14", unit: "", label: "Types of Machinery Owned / Leased" },
  { num: "3", unit: "", label: "Expert Directors" },
  { num: "5+", unit: "", label: "Years of Field Experience" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid-overlay" />
      <div className="hero__glow" />

      {/* ── Left Content ── */}
      <div className="hero__content">
        <span className="hero__eyebrow">
          Utility-Scale Solar EPC Contractor
        </span>
        <p className="hero__location">
          📍 Barmer, Rajasthan — Heart of India's Solar Belt
        </p>
        <h1 className="hero__heading">
          Building
          <br />
          <em>Utility-Scale</em>
          <br />
          Solar Farms
        </h1>
        <p className="hero__desc">
          Ground-mounted solar EPC for India's largest energy corporates.
          20-acre to 500-acre land projects executed with precision — from
          earthworks to grid synchronisation.
        </p>
        <div className="hero__btns">
          <button className="btn-accent">Start a Project</button>
          <button className="btn-outline">View Our Work</button>
        </div>
      </div>

      {/* ── Right Half — Background Image + Panel overlay ── */}
      <aside className="hero__panel">
        <div className="hero__panel-img" />
        <div className="hero__panel-overlay" />

        <div className="hero__panel-content">
          {metrics.map((m, i) => (
            <div key={i}>
              {i > 0 && <div className="hero__panel-divider" />}
              <div className="hero__metric">
                <div className="hero__metric-num">
                  {m.num}
                  <span className="hero__metric-unit">{m.unit}</span>
                </div>
                <div className="hero__metric-label">{m.label}</div>
              </div>
            </div>
          ))}
          <div className="hero__cin-badge">
            <p className="hero__cin-badge p">CIN · MCA Registered</p>
            <span className="hero__cin-badge span">U41001RJ2025PTC102845</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
