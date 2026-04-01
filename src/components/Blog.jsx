import "./Blog.css";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Cost of Solar Power Plant in India (2026 Guide)",
    desc: "Understand cost, ROI, and installation pricing for solar projects.",
    image: "/solar1.jpg",
  },
  {
    id: 2,
    title: "How Solar Installation Works Step-by-Step",
    desc: "Complete process from site survey to grid connection.",
    image: "/solar2.jpg",
  },
  {
    id: 3,
    title: "What is Solar Piling Work?",
    desc: "Learn why piling is critical for large solar projects.",
    image: "/solar3.jpg",
  },
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="blog">
      <div className="blog__header">
        <h2>Insights & Industry Knowledge</h2>
        <p>Latest updates on solar, construction & infrastructure</p>
      </div>

      <div className="blog__grid">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog__card"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <div
              className="blog__img"
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className="blog__content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <span>Read More →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}