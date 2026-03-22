import './Projects.css';

// NOTE: Replace these with your real project photos.
// Set `image` to an imported JPG/PNG path, e.g.:
//   import tharImg from '../assets/thar-project.jpg';
// Then set image: tharImg
// If no image, the SVG placeholder will show.

const projects = [
  {
    tag: 'Barmer, Rajasthan · Adani Group',
    mw: '50 MW',
    title: 'Thar Desert Solar Farm',
    meta: '320 Acres · Fixed Tilt · 66 kV Grid Evacuation',
    image: null,
    accent: '#1565C0',
    large: true,
  },
  {
    tag: 'Jaisalmer, Rajasthan · IPP',
    mw: '25 MW',
    title: 'Jaisalmer Solar Park',
    meta: '160 Acres · Single Axis Tracker · 33 kV',
    image: null,
    accent: '#1976D2',
    large: false,
  },
  {
    tag: 'Bikaner, Rajasthan · Corporate',
    mw: '10 MW',
    title: 'Bikaner Energy Farm',
    meta: '65 Acres · Fixed Tilt · 33 kV',
    image: null,
    accent: '#1565C0',
    large: false,
  },
];

function SolarPanelSVG({ color = '#1565C0', rows = 2, cols = 6 }) {
  const W = 580, H = 300;
  const panelW = Math.floor((W - 20) / cols) - 5;
  const panelH = 46;
  const startY = H / 2 - 10;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width={W} height={H} fill="#0A1828" />
      <rect x="0" y={H / 2} width={W} height={H / 2} fill="#0D2030" />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={10 + c * (panelW + 5)}
            y={startY + r * (panelH + 8)}
            width={panelW}
            height={panelH}
            fill={color}
            opacity={r === 0 ? 0.55 : 0.38}
            rx="2"
          />
        ))
      )}
      <circle cx={W - 80} cy={55} r={38} fill="#F5A623" opacity="0.12" />
      <circle cx={W - 80} cy={55} r={22} fill="#F5A623" opacity="0.16" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <span className="section-label">Our Projects</span>
        <h6 className="projects__heading">
          Landmark Executions<br />Across Rajasthan
        </h6>
      </div>

      <div className="projects__grid">
        {projects.map((p) => (
          <div
            className={`projects__card ${p.large ? 'projects__card--large' : ''}`}
            key={p.title}
          >
            <div className="projects__card-bg">
              {p.image
                ? <img src={p.image} alt={p.title} className="projects__card-img" />
                : <SolarPanelSVG color={p.accent} rows={p.large ? 2 : 2} cols={p.large ? 6 : 4} />
              }
            </div>
            <div className="projects__card-content">
              <span className="projects__tag">{p.tag}</span>
              <div className="projects__mw">{p.mw}</div>
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__meta">{p.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
