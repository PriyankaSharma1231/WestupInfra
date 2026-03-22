import './WhyUs.css';

const reasons = [
  {
    num: '01',
    title: 'Based in Barmer — India\'s Solar Core',
    desc: 'Our HQ in Barmer puts us at the epicentre of Rajasthan\'s solar belt — fastest mobilisation, local regulatory relationships, and ground knowledge no outsider has.',
  },
  {
    num: '02',
    title: 'Corporate-Grade Execution',
    desc: 'Structured to work with Adani, large IPPs, and listed corporates — with proper project documentation, billing, and compliance at every stage.',
  },
  {
    num: '03',
    title: 'HSE Zero Harm Policy',
    desc: 'All accidents are preventable — our HSE policy is integrated into every site operation. Dedicated HSE Supervisors on every active project with PPE compliance enforced.',
  },
  {
    num: '04',
    title: '100+ Manpower Ready to Deploy',
    desc: '2 Engineers, 5 Supervisors, 2 HSE Managers, 28 Skilled Workers, 47 Unskilled Labour, Welders, Electricians — fully mobilisable across Rajasthan.',
  },
];
const certs = [
  {
    tag: 'MCA',
    title: 'Active Private Limited Company',
    desc: 'Incorporated 16 May 2025 · RoC-Jaipur · CIN: U41001RJ2025PTC102845 · Status: Active',
  },
  {
    tag: 'GST',
    title: 'GST Registered — Rajasthan',
    desc: 'GSTIN: 08AAECW1287A1ZH · Registered under GST for construction and EPC services.',
  },
  {
    tag: 'PAN',
    title: 'PAN Verified',
    desc: 'PAN: AAECW1287A · Verified and active for all B2B invoicing and TDS compliance.',
  },
  {
    tag: 'Structure',
    title: '3-Director Leadership Team',
    desc: 'Uday Ramawat · Pushpendra Singh Bhati · Jigyanshu Acharya — all appointed at incorporation for aligned leadership.',
  },
];
export default function WhyUs() {
  return (
    <section className="why">
      <div className="why__left">
        <span className="section-label">Why Choose Us</span>
        <h2 className="why__heading">Built for<br />Big Scale</h2>
        <p className="why__intro">
          Large solar EPC demands deep field capability, regulatory expertise, and a team
          that has executed under pressure. Westup Infra brings all three.
        </p>

        <div className="why__list">
          {reasons.map((r) => (
            <div className="why__item" key={r.num}>
              <span className="why__num">{r.num}</span>
              <div>
                <h4 className="why__item-title">{r.title}</h4>
                <p className="why__item-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why__right">
        <div className="why__barmer-badge">
          <p>
            <strong>Barmer, Rajasthan</strong> receives some of India's highest solar
            irradiation — averaging <strong>6.0–6.5 kWh/m²/day</strong>. It sits within
            the same high-yield belt as Adani's largest solar parks in Jaisalmer and
            Bikaner — making us the ideal on-ground EPC partner for this region.
          </p>
        </div>

        <span className="section-label" style={{ marginTop: '8px' }}>Compliance & Registration</span>

        {certs.map((c) => (
          <div className="why__cert" key={c.tag}>
            <span className="why__cert-tag">{c.tag}</span>
            <div className="why__cert-title">{c.title}</div>
            <p className="why__cert-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
