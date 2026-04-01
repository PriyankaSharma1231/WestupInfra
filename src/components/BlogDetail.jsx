import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const blogData = {
  1: {
    title: "Cost of Solar Power Plant in India",
    content:
      "Solar plant cost depends on size, location, and equipment. Industrial solar projects typically cost ₹40,000–₹60,000 per kW...",
  },
  2: {
    title: "Solar Installation Process",
    content:
      "The process includes site survey, design, foundation, module mounting, wiring, and grid connection...",
  },
  3: {
    title: "Solar Piling Work",
    content:
      "Piling ensures structural stability of solar panels, especially in large-scale projects...",
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id];

  return (
    <section className="blogDetail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </section>
  );
}