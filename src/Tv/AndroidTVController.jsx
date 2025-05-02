import React from "react";
import "./AndroidTvController.css";
const blogs = [
  {
    title: "How AI is Transforming Presentation Design",
    content: "AI is revolutionizing how we design presentations. ".repeat(500),
  },
  {
    title: "10 Ways to Maximize Productivity Using FalconAI",
    content: "FalconAI offers many features that boost productivity. ".repeat(500),
  },
  {
    title: "From Text to Slides: A Deep Dive Into AI-Powered Content Generation",
    content: "The core of FalconAI lies in converting raw text into visual slides. ".repeat(500),
  },
  {
    title: "Case Study: FalconAI in the Classroom",
    content: "Educators are using FalconAI to simplify lesson planning. ".repeat(500),
  },
  {
    title: "Business Presentations in the AI Era",
    content: "AI is reshaping corporate presentations like never before. ".repeat(500),
  },
  {
    title: "Design Tips When Using FalconAI",
    content: "Effective design enhances the power of AI-generated content. ".repeat(500),
  },
  {
    title: "How FalconAI Helps Researchers and Scholars",
    content: "Researchers save hours using FalconAI for their presentations. ".repeat(500),
  },
  {
    title: "The Future of Presentations: AI Trends in 2025",
    content: "AI trends are driving the next generation of slideshows. ".repeat(500),
  },
  {
    title: "Top 5 Customization Features of FalconAI",
    content: "Customization is key to FalconAI's appeal. ".repeat(500),
  },
  {
    title: "Why Speed Matters in Presentation Creation",
    content: "Time-saving is a top reason users love FalconAI. ".repeat(500),
  },
];

const BlogComponent = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">FalconAI Blog</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-post">
            <h3 className="post-title">{blog.title}</h3>
            <p className="post-content">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;