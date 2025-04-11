import { Link } from "react-router-dom";  
import "./Home.css";  
import Navbar from "../Navbar/Navbar.jsx";  
import Footer from "./Footer.jsx";

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
            <p>Discover how artificial intelligence is revolutionizing the presentation space—automating layout, improving visual design, and helping you focus on storytelling over formatting.</p>
          </div>

          <div className="blog-article">
            <h3>Top 5 Tips for Engaging Presentations</h3>
            <p>Learn how to captivate your audience with powerful visuals, meaningful data, and persuasive slide structure that keeps people hooked until the final slide.</p>
          </div>

          <div className="blog-article">
            <h3>Design Trends for 2025 Presentations</h3>
            <p>From pastel gradients to animated slide transitions, get up to date with the hottest trends in presentation design that will make your decks stand out.</p>
          </div>

          <div className="blog-article">
            <h3>Case for AI in Education</h3>
            <p>Explore how teachers and students are leveraging AI tools like FalconAI to save time, reduce burnout, and deliver better academic results.</p>
          </div>

          <div className="blog-article">
            <h3>10 Presentation Mistakes to Avoid</h3>
            <p>Bullet points overload? Tiny fonts? Unreadable graphs? We break down the most common pitfalls that ruin otherwise great ideas—and how to avoid them using FalconAI.</p>
          </div>
        </section>          

        {/* FAQ Section */}          
        <section className="faq-section">          
          <h2 className="section-heading">Frequently Asked Questions</h2>          

          <div className="faq-item">
            <h4>Is FalconAI free to use?</h4>
            <p>Yes! FalconAI offers free access to generate and customize unlimited slides. You can export your presentations without watermarks.</p>
          </div>

          <div className="faq-item">
            <h4>Can I choose from different presentation themes?</h4>
            <p>Yes, FalconAI comes with a wide range of themes—from minimalistic to vibrant—to suit all types of audiences and topics.</p>
          </div>

          <div className="faq-item">
            <h4>Is it mobile-friendly?</h4>
            <p>Absolutely! FalconAI is fully responsive and works smoothly on mobile, tablet, and desktop devices.</p>
          </div>

          <div className="faq-item">
            <h4>Can I edit the AI-generated slides?</h4>
            <p>Yes! All content is editable—text, layout, images, fonts, colors, and even structure. You’re in control.</p>
          </div>

          <div className="faq-item">
            <h4>Do you support code-related presentations?</h4>
            <p>Yes! FalconAI supports technical content including Python, Java, HTML, and more—ideal for developers and IT professionals.</p>
          </div>
        </section>          

        {/* Case Study Section */}          
        <section className="case-studies">          
          <h2 className="section-heading">Case Studies: Real User Success</h2>          

          <div className="case-study-item">
            <h4>Startup Founder Cuts Deck Creation Time by 90%</h4>
            <p>Raj, a startup founder in Bangalore, used FalconAI to generate his investor pitch deck in minutes—freeing up valuable time to polish his pitch and focus on business strategy.</p>
          </div>

          <div className="case-study-item">
            <h4>Teacher Saves 6 Hours a Week</h4>
            <p>Meena, a high school teacher, now prepares lesson slides in minutes. With FalconAI’s intuitive interface, she focuses more on engaging students and less on slide design.</p>
          </div>

          <div className="case-study-item">
            <h4>Engineering Student Impresses Professors</h4>
            <p>Ankit used FalconAI for his final year project. With professional design and AI-structured flow, his presentation stood out and got top marks from his professors.</p>
          </div>

          <div className="case-study-item">
            <h4>Marketing Team Boosts Productivity</h4>
            <p>A 5-member marketing team used FalconAI to create client presentations 3x faster. They’ve integrated it into their workflow and now deliver designs with faster turnaround.</p>
          </div>

          <div className="case-study-item">
            <h4>Freelancer Wins More Clients</h4>
            <p>Sana, a freelance content creator, added presentation services to her portfolio using FalconAI. She now delivers presentations in record time and has doubled her client base.</p>
          </div>
        </section>          

        {/* Call to Action Section */}          
        <section className="cta-section">          
          <h2 className="cta-heading">Start Creating AI-Powered Presentations Now!</h2>          
          <p className="cta-subtext">Join thousands of users who are transforming the way they present. Try FalconAI today!</p>          
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>          
      </div>       
   <Footer/>   
    </>  
  );  
};  

export default Home;