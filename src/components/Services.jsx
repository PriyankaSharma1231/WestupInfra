import './Services.css';
const services = [
  {
    num: '01',
    title: 'Solar Foundation Work & Cabling',
    desc: 'Site levelling, boundary fencing, cable trenching, access road construction, and inverter room civil work across large land parcels.',
  },
  {
    num: '02',
    title: 'Solar PV Module Installation',
    desc: 'GI/MS structure fabrication, pile driving, and module mounting for fixed-tilt and single-axis tracker systems on ground-mounted farms.',
  },
  {
    num: '03',
    title: 'Solar Pilling & MMS Work',
    desc: 'DC string cabling, combiner boxes, inverter installation, LT panel rooms, AC cabling, and transformer installation.',
  },
  {
    num: '04',
    title: 'Earth Work & Leveling',
    desc: '33 kV / 66 kV substation construction, evacuation line installation, and coordination with DISCOM / STU for grid synchronisation.',
  },
  {
    num: '05',
    title: 'Civil & Building Construction',
    desc: 'Plant SCADA infrastructure, remote monitoring stations, weather sensors, and performance ratio compliance systems.',
  },
  {
    num: '06',
    title: 'Manpower Supply Services',
    desc: 'Post-commissioning operations and maintenance contracts for long-term plant health, cleaning, and performance assurance.',
  },
  {
    num: '07',
    title: 'Solar & Energy Consultancy',
    desc: 'End-to-end project advisory including feasibility studies, DPR preparation, land assessment, regulatory approvals, and techno-commercial guidance for utility-scale solar projects.',
  },
  {
    num: '08',
    title: 'Import & Export Services',
    desc: 'Procurement and logistics support for solar modules, inverters, transformers, and balance-of-plant equipment from domestic and international suppliers.',
  },
  {
    num: '09',
    title: 'Logistics & Transportation',
    desc: 'Heavy equipment transport, oversized load movement, on-site material handling, and last-mile delivery coordination for solar project sites across Rajasthan and beyond.',
  },
  {
    num: '10',
    title: 'Security & Surveillance',
    desc: 'Comprehensive site security solutions including CCTV installation, perimeter fencing, guard deployment, and remote monitoring for active and commissioned solar plants.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <span className="section-label">What We Do</span>
      <h2 className="services__heading">Full EPC Scope —<br />Start to Grid</h2>
      <p className="services__sub">End-to-end execution — from site survey to grid synchronisation.</p>

      <div className="services__grid">
        {services.map((s) => (
          <div className="services__card" key={s.num}>
            <span className="services__num">{s.num}</span>
            <h3 className="services__card-title">{s.title}</h3>
            <p className="services__card-desc">{s.desc}</p>
            <div className="services__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}
