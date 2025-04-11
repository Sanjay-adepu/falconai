import { Link } from "react-router-dom";  
import "./Home.css";  
import Navbar from "../Navbar/Navbar.jsx";  

const Home = () => {  
  return (   
    <>  
      <Navbar />  

      <div className="home-page">          
        {/* Hero Section */}          
        <section className="hero">          
          <h1 className="hero-heading"> Create AI-Generated Presentations in Less Than 1 Minute!</h1>          
          <p className="hero-subtext">          
            FalconAI is an AI-powered platform that instantly converts text into professional presentations, saving hours of manual work. Whether you're a student, educator, or business professional, FalconAI helps you create <strong>high-quality, customizable</strong> presentations in under a minute! With intuitive design tools, smart content suggestions, and real-time editing capabilities, FalconAI empowers you to focus on ideas while we handle the visuals—making your workflow faster, smarter, and more impactful.
          </p>
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>          

        {/* Features Section */}          
        <section className="features">          
          <h2 className="section-heading">Powerful Features for Effortless Productivity</h2>          
          <ul className="why-list"> 
            <li className="feature-item"><strong>🔹 Lightning-Fast AI Response:</strong> Get real-time AI assistance in <strong>less than 12 seconds</strong>.</li>   
            <li className="feature-item"><strong>🔹 Unlimited Slides:</strong> Create as many slides as you need without restrictions.</li> 
            <li className="feature-item"><strong>🔹 No Watermarks:</strong> Download clean, professional slides without branding overlays.</li>  
            <li className="feature-item"><strong>🔹 Image Customization:</strong> Add, remove, or replace images based on your needs.</li>  
            <li className="feature-item"><strong>🔹 Theme Selection & Font Customization:</strong> Choose from various themes, title colors, and fonts.</li>  
            <li className="feature-item"><strong>🔹 AI-Powered Slide Generation:</strong> Convert raw text into well-structured, visually appealing PowerPoint slides instantly.</li>  
            <li className="feature-item"><strong>🔹 Instant PDF & PPTX Downloads:</strong> Save your presentations in multiple formats for easy sharing.</li>  
            <li className="feature-item"><strong>🔹 Customization Options:</strong> Modify text, images, fonts, and colors to match your preferences.</li>  
          </ul>          
        </section>          

        {/* Why Choose FalconAI Section */}          
        <section className="why-choose">          
          <h2 className="section-heading">Why Choose FalconAI?</h2>          
          <p className="why-description">      
            FalconAI is built for students, educators, and professionals who need <strong>fast, high-quality</strong> presentations. Whether you're preparing for a <strong>business meeting, academic project, or research paper</strong>, FalconAI ensures your slides are polished and engaging.      
          </p>          
          <ul className="why-list">          
            <li><strong>🔹 Save Time:</strong> Generate fully designed slides <strong>in under a minute</strong>.</li>          
            <li><strong>🔹 AI-Optimized Content:</strong> Get structured, professional-grade content instantly.</li>          
            <li><strong>🔹 Easy to Use:</strong> No design skills needed—simply input your text and let AI do the rest.</li>          
            <li><strong>🔹 AI-Powered Insights:</strong> Improve slide content with intelligent recommendations.</li>          
          </ul>          
        </section>          

        {/* Blog Section */}          
        <section className="blog-section">          
          <h2 className="section-heading">Latest from Our Blog</h2>          
          <div className="blog-article">
            <h3>How AI is Changing the Way We Present</h3>
            <p>From corporate boardrooms to classrooms, AI tools like FalconAI are streamlining the process of presentation creation. Learn how automation, real-time editing, and design intelligence are enabling professionals to focus more on ideas and storytelling—while AI takes care of the structure and visuals.</p>
          </div>
          <div className="blog-article">
            <h3>Top 5 Tips for Engaging Presentations</h3>
            <p>Want to capture your audience's attention? We break down five essential tips—from using visuals effectively to crafting compelling titles—so you can build impactful slides in no time using FalconAI's tools.</p>
          </div>
          <div className="blog-article">
            <h3>Design Trends for 2025 Presentations</h3>
            <p>Stay ahead of the curve with our roundup of design trends, including minimalist themes, pastel gradients, and AI-suggested layouts. Find out how FalconAI helps you adopt these with a single click.</p>
          </div>
        </section>          

        {/* FAQ Section */}          
        <section className="faq-section">          
          <h2 className="section-heading">Frequently Asked Questions</h2>          
          <div className="faq-item">
            <h4>Is FalconAI really free to use?</h4>
            <p>Yes! You can generate and customize unlimited slides for free. File downloads are also free, and there are no hidden charges or watermarks on your presentations.</p>
          </div>
          <div className="faq-item">
            <h4>Can I customize the slide designs?</h4>
            <p>Absolutely! You can change themes, fonts, images, and colors to match your personal or professional style. Our AI gives you a solid base—but the final touch is yours.</p>
          </div>
          <div className="faq-item">
            <h4>What file formats are supported?</h4>
            <p>FalconAI allows you to export your presentation in PDF and PPTX formats instantly, making it easy to present anywhere.</p>
          </div>
        </section>          

        {/* Case Study Section */}          
        <section className="case-studies">          
          <h2 className="section-heading">Case Studies: Real User Success</h2>          
          <div className="case-study-item">
            <h4>Startup Founder Cuts Deck Creation Time by 90%</h4>
            <p>Raj, a startup founder from Bangalore, used FalconAI to pitch investors. With limited time and no design expertise, he built a compelling pitch deck in minutes—saving hours while impressing his audience with clean, professional slides.</p>
          </div>
          <div className="case-study-item">
            <h4>Educator Simplifies Lesson Planning</h4>
            <p>Meena, a school teacher, used FalconAI to create weekly lessons. Instead of spending hours formatting slides, she now inputs her lesson notes and gets structured, themed slides in seconds, freeing up more time for students.</p>
          </div>
          <div className="case-study-item">
            <h4>Student Achieves Top Marks with Clean Visuals</h4>
            <p>Ankit, a final-year engineering student, transformed his research project using FalconAI. His crisp, AI-generated visuals helped him clearly communicate complex ideas and secured top grades in his final presentation.</p>
          </div>
        </section>          

        {/* Call to Action Section */}          
        <section className="cta-section">          
          <h2 className="cta-heading">Start Creating AI-Powered Presentations Now!</h2>          
          <p className="cta-subtext">Try FalconAI and experience next-level productivity.</p>          
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>          
      </div>          
    </>  
  );  
};  

export default Home;