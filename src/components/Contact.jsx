import { useState } from "react";
import "./Contact.css";

const contactDetails = [
  {
    icon: "📍",
    label: "Registered Office",
    value: "Azad Chowk, Barmer, Rajasthan — 344001",
  },
  { icon: "✉", label: "Email", value: "westupinfra.pvt.ltd@gmail.com" },
  { icon: "📞", label: "Contact Person", value: "+91 8619579983" },
  { icon: "🏢", label: "CIN", value: "U41001RJ2025PTC102845" },
];

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  projectType: "Ground-Mounted Solar EPC",
  landArea: "",
  capacity: "",
  location: "",
  brief: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle");
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    console.log("dffgfg");
    
    e.preventDefault();
    setStatus("loading");

    try {
       console.log("NONON");
      const response = await fetch(
        "https://https-render-com-hho8.onrender.com/inquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            project_type: form.projectType,
            land_area: form.landArea,
            capacity: form.capacity,
            location: form.location,
            brief: form.brief,
          }),
        },
      );

      if (!response.ok) throw new Error("Server error");
      console.log("REEEE",response);
      
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__grid">
        <div className="contact__info">
          <span className="section-label">Get in Touch</span>
          <h2 className="contact__heading">
            Discuss Your
            <br />
            Project With Us
          </h2>
          <p className="contact__intro">
            Have a land parcel, a solar mandate, or a corporate project
            requirement? Reach our project team for a techno-commercial
            discussion.
          </p>

          <div className="contact__details">
            {contactDetails.map((d) => (
              <div className="contact__row" key={d.label}>
                <span className="contact__icon">{d.icon}</span>
                <div>
                  <strong>{d.label}</strong>
                  <span>{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          {status === "success" ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Enquiry Submitted</h3>
              <p>
                Thank you. Our project team will reach out within 24 business
                hours.
              </p>
              <button
                className="btn-accent"
                onClick={() => setSubmitted(false)}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company / Group name"
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option>Ground-Mounted Solar EPC</option>
                  <option>Corporate Captive Solar Farm</option>
                  <option>Grid Substation & HT Works</option>
                  <option>Solar Farm O&M</option>
                  <option>Other Infrastructure</option>
                  <option>Consultancy</option>
                  <option>Import & Export</option>
                  <option>Logistics</option>
                  <option>Security Surveillance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact__form-row">
                {/* <div className="contact__field">
                  <label htmlFor="landArea">Land Area (Acres)</label>
                  <input
                    id="landArea"
                    name="landArea"
                    type="text"
                    placeholder="e.g. 50 acres"
                    value={form.landArea}
                    onChange={handleChange}
                  />
                </div> */}
                {/* <div className="contact__field">
                  <label htmlFor="capacity">Target Capacity (MW)</label>
                  <input
                    id="capacity"
                    name="capacity"
                    type="text"
                    placeholder="e.g. 5 MW"
                    value={form.capacity}
                    onChange={handleChange}
                  />
                </div> */}
              </div>

              <div className="contact__field">
                <label htmlFor="location">Project Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="District, State"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="brief">Project Brief</label>
                <textarea
                  id="brief"
                  name="brief"
                  placeholder="Client name, timeline, scope requirements..."
                  value={form.brief}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact__submit" disabled={status === "loading"}> 
                {status === "loading" ? "Submitting..." : "Submit Project Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
