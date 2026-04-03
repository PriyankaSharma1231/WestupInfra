import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <>
        <Navbar />
        <div style={{ padding: "100px 40px", textAlign: "center" }}>
          <h2>Blog not found</h2>
          <Link to="/blog">← Back to Blog</Link>
        </div>
        <Footer />
      </>
    );

  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];

    lines.forEach((line, i) => {
      if (line.startsWith("## ")) {
        elements.push(<h2 key={i}>{line.replace("## ", "")}</h2>);
      } else if (line.startsWith("### ")) {
        elements.push(<h3 key={i}>{line.replace("### ", "")}</h3>);
      } else if (line.startsWith("---")) {
        elements.push(<hr key={i} />);
      } else if (line.trim() === "") {
        return;
      } else {
        // Remove bullet symbols if present
        const cleanLine = line.replace(/^- /, "");

        // Handle bold text
        const parts = cleanLine.split(/\*\*(.*?)\*\*/g);
        const formatted = parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part,
        );

        elements.push(<p key={i}>{formatted}</p>);
      }
    });

    return elements;
  };

  return (
    <>
      <Navbar />
      <article className="blogpost">
        {/* Hero Image */}
        <div className="blogpost__hero">
          <img
            src={blog.image}
            alt={blog.title}
            className="blogpost__hero-img"
          />
          <div className="blogpost__hero-overlay" />
        </div>

        <div className="blogpost__inner">
          <Link to="/blog" className="blogpost__back">
            ← Back to All Articles
          </Link>
          <span className="blogpost__cat">{blog.category}</span>
          <h1 className="blogpost__title">{blog.title}</h1>
          <div className="blogpost__meta">
            <span>📅 {blog.date}</span>
            <span>⏱ {blog.readTime}</span>
          </div>

          <div className="blogpost__content">{renderContent(blog.content)}</div>

          {/* CTA */}
          <div className="blogpost__cta">
            <h3>Ready to Start Your Solar Project?</h3>
            <p>
              Contact Westup Infra Pvt. Ltd. for a free consultation and project
              quote.
            </p>
            <Link to="/#contact" className="btn-accent">
              Get Free Quote →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
