import './Ticker.css';

const items = [
  'Ground-Mounted Solar EPC',
  'Barmer · Rajasthan',
  '20+ Acre Projects',
  'Adani & Corporate Clients',
  'MCA Registered · Active',
  'Utility-Scale Infrastructure',
  'Grid-Connected Solar Farms',
  'Full EPC Scope',
];

export default function Ticker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker__inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
