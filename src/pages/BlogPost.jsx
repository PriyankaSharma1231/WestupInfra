import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return (
    <>
      <Navbar />
      <div style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2>Blog not found</h2>
        <Link to="/blog">← Back to Blog</Link>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <article className="blogpost">
        <div className="blogpost__inner">
          <Link to="/blog" className="blogpost__back">← Back to All Articles</Link>
          <span className="blogpost__cat">{blog.category}</span>
          <h1 className="blogpost__title">{blog.title}</h1>
          <div className="blogpost__meta">
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="blogpost__content">
            {blog.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
              if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
              if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
              if (line.startsWith('---')) return <hr key={i} />;
              if (line.trim() === '') return <br key={i} />;
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="blogpost__cta">
            <h3>Ready to Start Your Solar Project?</h3>
            <p>Contact Westup Infra Pvt. Ltd. for a free consultation and project quote.</p>
            <Link to="/#contact" className="btn-accent">Get Free Quote →</Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}