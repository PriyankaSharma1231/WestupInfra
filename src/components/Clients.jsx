import "./Clients.css";


import ampyre from "../asset/ampyre.jpeg";
import renew from "../asset/renew.png";
import ntpc from "../asset/ntpc.png";
import sterling from "../asset/Sterling_Wilson__Logo.jpg";
import powertac from "../asset/powertac.png";
import kpenergy from "../asset/kpenergy.png";

const clients = [
  { name: "ReNew Power", logo: renew },
  { name: "Sterling & Wilson", logo: sterling },
  { name: "Powertac", logo: powertac },
  { name: "KP Energy", logo: kpenergy },
  //   { name: "NPC", logo: npc },
  { name: "Ampyr", logo: ampyre },
  { name: "NTPC", logo: ntpc },
  //   { name: "MSC", logo: msc },
  //   { name: "ECI", logo: eci },
];

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients__inner">
        {/* Header */}
        <div className="clients__header">
          <span className="clients__eyebrow">Trusted By Industry Leaders</span>
          <h2 className="clients__heading">
            Our Team Has Delivered For <em>India's Best</em>
          </h2>
          <p className="clients__subtext">
            With hands-on experience working alongside India's top solar EPC and
            energy companies, our team brings unmatched field expertise to every
            project we undertake.
          </p>
        </div>

        {/* Client Cards with Logo + Name */}
        <div className="clients__grid">
          {clients.map((client, i) => (
            <div key={i} className="clients__card">
              <div className="clients__logo-wrap">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="clients__logo"
                />
              </div>
              <span className="clients__name">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="clients__trust">
          <p>
            ⚡ Our directors and site engineers have collectively executed
            <strong> 500+ MW</strong> of solar capacity across Rajasthan,
            Gujarat, and beyond — working directly with these industry leaders
            before founding Westup Infra.
          </p>
        </div>
      </div>
    </section>
  );
}
