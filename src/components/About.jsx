import "./About.css";

const directors = [
  {
    initials: "JA",
    name: "Jigyanshu Acharya",
    role: "Director · Since 16 May 2025",
  },
  {
    initials: "UR",
    name: "Uday Ramawat",
    role: "Director · Since 16 May 2025",
  },
  {
    initials: "PS",
    name: "Pushpendra Singh Bhati",
    role: "Director · Since 16 May 2025",
  },
];

const specs = [
  { label: "CIN", value: "U41001RJ2025PTC102845" },
  { label: "Status", value: "Active", note: "· MCA" },
  { label: "Incorporated", value: "16 May 2025" },
  { label: "ROC", value: "RoC-Jaipur", note: "· Rajasthan" },
  { label: "Auth. Capital", value: "₹10,00,000" },
  { label: "Headquarters", value: "Barmer", note: "· Rajasthan" },
  { label: "Sector", value: "Construction", note: "& EPC" },
  { label: "Company Type", value: "Private Ltd", note: "· Non-Govt" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <span className="section-label">Who We Are</span>
        <h2 className="about__heading">
          Westup Infra
          <br />
          Private Limited
        </h2>
        <p className="about__body">
          WESTUP INFRA PRIVATE LIMITED is a leading company in the Solar Power
          Project,Oil & Construction Field. To be the leading recognized
          organization in all aspects of General Construction Works, Civil
          Works, Building Work, General Supplier, Man Power, Machinery include
          with transportation services, heavy equipment rentals, manufacture
          point of sales, wire products, general purpose chairs along with large
          scale distribution.
        </p>
        <p className="about__body">
          JIGYANSHU ACHARYA and Pushpendra Singh Bhati is the founder of NEETI
          ENTERPRISES. UDAY RAMAWAT, JIGYANSHU ACHARYA comes from a business
          family and has humble beginnings. Through dedication and hard work, he
          has risen to success on his own. He began his journey in the
          construction industry at a young age and boasts over five years of
          extensive professional experience
        </p>

        <span className="section-label" style={{ marginTop: "28px" }}>
          Leadership
        </span>
        <div className="about__directors">
          {directors.map((d) => (
            <div className="about__director" key={d.name}>
              <div className="about__avatar">{d.initials}</div>
              <div>
                <div className="about__dir-name">{d.name}</div>
                <div className="about__dir-role">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about__right">
        <span className="section-label">Company Profile</span>
        <div className="about__specs">
          {specs.map((s) => (
            <div className="about__spec-row" key={s.label}>
              <span className="about__spec-key">{s.label}</span>
              <span className="about__spec-val">
                {s.value}
                {s.note && <span className="about__spec-note"> {s.note}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
