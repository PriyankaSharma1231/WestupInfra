import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./BlogList.css";
import { useState } from "react";

const categories = ["All", "Solar", "Construction", "Electrical", "Industry Guides"];

export default function BlogList() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogs : blogs.filter(b => b.category === active);

  return (
    <>
      <Navbar />
      <section className="bloglist">
        <div className="bloglist__inner">
          <div className="bloglist__header">
            <span className="bloglist__eyebrow">Knowledge Hub</span>
            <h1 className="bloglist__heading">Solar & Infrastructure <em>Insights</em></h1>
            <p className="bloglist__sub">Expert guides on solar energy, civil construction, and electrical systems.</p>
          </div>

          {/* Category Filter */}
          <div className="bloglist__cats">
            {categories.map(c => (
              <button
                key={c}
                className={`bloglist__cat ${active === c ? "bloglist__cat--active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="bloglist__grid">
            {filtered.map(blog => (
              <Link to={`/blog/${blog.slug}`} key={blog.id} className="bloglist__card">
                <span className="bloglist__card-cat">{blog.category}</span>
                <h2 className="bloglist__card-title">{blog.title}</h2>
                <p className="bloglist__card-summary">{blog.summary}</p>
                <div className="bloglist__card-meta">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <span className="bloglist__card-link">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}