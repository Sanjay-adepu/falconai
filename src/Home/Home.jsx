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
            FalconAI is an AI-powered platform that instantly converts text into professional presentations, saving hours of manual work. Whether you're a student, educator, or business professional, FalconAI helps you create **high-quality, customizable** presentations in under a minute!      
          </p>          
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>          

        {/* Features Section */}          
        <section className="features">          
          <h2 className="section-heading">Powerful Features for Effortless Productivity</h2>          
          <ul className="why-list"> 
                 <li className="feature-item"><strong>🔹 Lightning-Fast AI Response:</strong> Get real-time AI assistance in **less than 12 seconds**.</li>   
  <li className="feature-item"><strong>🔹 Unlimited Slides:</strong> Create as many slides as you need without restrictions.</li> 
            <li className="feature-item"><strong>🔹 No Watermarks:</strong> Download clean, professional slides without branding overlays.</li>  
<li className="feature-item"><strong>🔹 Image Customization:</strong> Add, remove, or replace images based on your needs.</li>  
            <li className="feature-item"><strong>🔹 Theme Selection & Font Customization:</strong> Choose from various themes, title colors, and fonts.</li>  
       
            <li className="feature-item"><strong>🔹 AI-Powered Slide Generation:</strong> Convert raw text into well-structured, visually appealing PowerPoint slides instantly.</li>  
            <li className="feature-item"><strong>🔹 Instant PDF & PPTX Downloads:</strong> Save your presentations in multiple formats for easy sharing for just **₹5 per download**.</li>  
           
            <li className="feature-item"><strong>🔹 Customization Options:</strong> Modify text, images, fonts, and colors to match your preferences.</li>  
            
          </ul>          
        </section>          

        {/* Why Choose FalconAI Section */}          
        <section className="why-choose">          
          <h2 className="section-heading">Why Choose FalconAI?</h2>          
          <p className="why-description">      
            FalconAI is built for students, educators, and professionals who need **fast, high-quality** presentations. Whether you're preparing for a **business meeting, academic project, or research paper**, FalconAI ensures your slides are polished and engaging.      
          </p>          
          <ul className="why-list">          
            <li><strong>🔹 Save Time:</strong> Generate fully designed slides **in under a minute**.</li>          
            <li><strong>🔹 AI-Optimized Content:</strong> Get structured, professional-grade content instantly.</li>          
            <li><strong>🔹 Affordable Pricing:</strong> Download your PPTs for just **₹5 per file**.</li>          
            <li><strong>🔹 Easy to Use:</strong> No design skills needed—simply input your text and let AI do the rest.</li>          
            <li><strong>🔹 AI-Powered Insights:</strong> Improve slide content with intelligent recommendations.</li>          
          </ul>          
        </section>          

  


        {/* Call to Action Section */}          
        <section className="cta-section">          
          <h2 className="cta-heading">Start Creating AI-Powered Presentations Now!</h2>          
          <p className="cta-subtext">Try FalconAI and experience next-level productivity for just **₹5 per download**.</p>          
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>          
      </div>          
    </>  
  );  
};  

export default Home;