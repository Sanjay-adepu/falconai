import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.jsx";  
import Footer from "../Footer.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {  
  const images = [
  "https://res.cloudinary.com/dppiuypop/image/upload/v1744734481/uploads/xayqocujbuxvbsji29rl.jpg",

 "https://res.cloudinary.com/dppiuypop/image/upload/v1744734565/uploads/etfbxtg6uwjtrw0yjm4g.jpg",
  "https://res.cloudinary.com/dppiuypop/image/upload/v1744734588/uploads/xam5cvriqypddliexom9.jpg",
  "https://res.cloudinary.com/dppiuypop/image/upload/v1744734612/uploads/ehrfkru4xzffou8qcka1.jpg",
  "https://res.cloudinary.com/dppiuypop/image/upload/v1744734746/uploads/gdiybb044rqcrzjfugng.jpg",
"https://res.cloudinary.com/dppiuypop/image/upload/v1744734808/uploads/stur5jtbjejhbdfmwmmc.jpg",
"https://res.cloudinary.com/dppiuypop/image/upload/v1744734835/uploads/j4g7airfuwuvibsqjnqb.jpg",
"https://res.cloudinary.com/dppiuypop/image/upload/v1744734855/uploads/xvon6yihzhzcxzi8twng.jpg"
];

const [currentIndex, setCurrentIndex] = useState(0);

// Auto-slide effect
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000); // 3 seconds
  return () => clearInterval(interval);
}, []);
  
  const goToPrevious = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};

const goToNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};
  


useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  
  return (   
    <>  
    


     
      <Navbar />  

      <div className="home-page">          
        {/* Hero Section */}          
        <section className="hero">          
          <h1 className="hero-heading"> Create AI-Generated Presentations in Less Than 1 Minute!</h1>          
          <p className="hero-subtext">          
            Falcon AI is an AI-powered platform that instantly converts text into professional presentations, saving hours of manual work. Whether you're a student, educator, or business professional, FalconAI helps you create <strong>high-quality, customizable</strong> presentations in under a minute! With intuitive design tools, smart content suggestions, and real-time editing capabilities, FalconAI empowers you to focus on ideas while we handle the visuals—making your workflow faster, smarter, and more impactful.
          </p>
          <Link to="/dashboard" className="btn-primary">Get Started</Link>          
        </section>         
        


        {/* Features Section */}          
     <section className="features" data-aos="fade-up">
  <h2 className="section-heading">Powerful Features for Effortless Productivity</h2>
  <ul className="why-list">
    <li className="feature-item" data-aos="fade-up" data-aos-delay="100">
      <strong>🔹 Lightning-Fast AI Response:</strong> Get real-time AI assistance in <strong>less than 12 seconds</strong>.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="200">
      <strong>🔹 Unlimited Slides:</strong> Create as many slides as you need without restrictions.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="300">
      <strong>🔹 No Watermarks:</strong> Download clean, professional slides without branding overlays.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="400">
      <strong>🔹 Image Customization:</strong> Add, remove, or replace images based on your needs.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="540">
      <strong>🔹 Theme Selection & Font Customization:</strong> Choose from various themes, title colors, and fonts.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="600">
      <strong>🔹 AI-Powered Slide Generation:</strong> Convert raw text into well-structured, visually appealing PowerPoint slides instantly.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="620">
      <strong>🔹 Instant PDF & PPTX Downloads:</strong> Save your presentations in multiple formats for easy sharing.
    </li>
    <li className="feature-item" data-aos="fade-up" data-aos-delay="660">
      <strong>🔹 Customization Options:</strong> Modify text, images, fonts, and colors to match your preferences.
    </li>
  </ul>
</section>
        {/* Why Choose FalconAI Section */}          
      
    <section className="why-choose" data-aos="fade-right">          
          <h2 className="section-heading">Why Choose FalconAI?</h2>          
          <p className="why-description" data-aos="fade-up" data-aos-delay="300">      
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
           <section className="blog-section" data-aos="fade-up">
  <h2 className="section-heading">Latest from Our Blog</h2>

  <div className="blog-article">
    <h3>How AI is Changing the Way We Present</h3>
    <p>
      Artificial Intelligence (AI) is no longer a futuristic concept reserved for sci-fi movies and elite tech conferences; it is becoming a pervasive and transformative force in almost every industry—including the world of presentations. Whether you are preparing a keynote speech for a major industry event, a class presentation for a university seminar, or a sales pitch for potential investors, AI is redefining the very foundation of how we conceptualize, create, and deliver presentations.
    </p>
    <p>
      Traditionally, building a compelling presentation was a multi-step ordeal. You would begin by selecting a template—often among hundreds of mediocre options. You'd then agonize over color schemes, ensuring text was readable yet vibrant, picking typography that matched the mood, and crafting transitions that weren't overly flashy or distractingly boring. Hours could vanish in the blink of an eye as you battled PowerPoint or Keynote, trying to fine-tune layouts or match photo aesthetics.
    </p>
    <p>
      Now, AI tools like Falcon are cutting through these obstacles with precision. Falcon’s intelligent design assistant not only recommends layout structures based on your content but also intuitively understands the flow of your narrative, suggesting image placements, highlighting key messages, and even optimizing your slide transitions for maximum audience impact. Rather than spending 70% of your time on the superficial, Falcon empowers users to focus on the 30% that truly matters—their message and storytelling.
    </p>
    <p>
      Moreover, Falcon uses deep learning to study thousands of successful presentation styles, dynamically adjusting its suggestions based on your goals. Whether you are aiming for a persuasive pitch, an educational workshop, or a storytelling session, Falcon molds itself to your unique needs. The AI doesn't just automate—it collaborates, becoming an invisible creative partner.
    </p>
    <p>
      Perhaps the most groundbreaking impact of AI in presentations is its ability to democratize great design. Previously, only individuals with a background in graphic design could craft truly stunning presentations. Today, thanks to Falcon and similar platforms, anyone—regardless of design experience—can build professional-grade slideshows effortlessly. This shift is leveling the playing field across industries, allowing small startups to present like Fortune 500 companies and students to deliver like seasoned TED speakers.
    </p>
    <p>
      Beyond aesthetics, Falcon’s AI also enhances accessibility. With automatic alt-text generation for images, real-time font readability checks, and inclusive color contrast recommendations, it ensures that presentations are not just beautiful but also accessible to all audience members, including those with visual impairments or cognitive differences.
    </p>
    <p>
      In the future, we can expect even deeper integrations where AI will anticipate audience reactions, adapt slides in real time based on engagement levels, and perhaps even suggest live tweaks to speakers as they present. Presentations will no longer be static artifacts but living, responsive dialogues between presenter and audience.
    </p>
    <p>
      The AI revolution in presentations is just beginning. With tools like Falcon leading the way, the barriers between ideas and audiences are collapsing, ushering in a new era where storytelling reigns supreme—and the technology quietly fades into the background, doing what it was always meant to do: serve creativity.
    </p>
  </div>

  <div className="blog-article">
    <h3>Top 5 Tips for Engaging Presentations</h3>
    <p>
      Creating an engaging presentation is both an art and a science. Even in a world of advanced tools like Falcon, the human touch—the ability to tell a story, to connect emotionally, to inspire action—remains irreplaceable. However, by mastering a few essential techniques, anyone can drastically elevate their presentation quality.
    </p>
    <p>
      <strong>1. Leverage Bold Visual Contrasts:</strong> Visual hierarchy is crucial for guiding your audience’s attention. Using bold color contrasts, such as dark backgrounds with light text or complementary accent colors, ensures that your key points pop off the screen. With Falcon’s smart palette recommendations, finding the right contrasts is effortless, reducing eye strain while boosting memorability.
    </p>
    <p>
      <strong>2. Craft Concise Headlines:</strong> Your headlines should function as signposts, telling your audience exactly what each slide is about at a glance. Long, rambling headlines dilute impact. Use active verbs and make your message succinct yet powerful. Falcon's AI editor helps you trim and polish your headlines without losing the core message.
    </p>
    <p>
      <strong>3. Integrate Dynamic Infographics:</strong> Data can be your greatest ally—or your worst enemy—depending on how it's presented. Static charts can bore; animated or interactive infographics captivate. Falcon’s built-in infographic generator offers dynamic visuals that update based on your data sets, ensuring your statistics never feel static or overwhelming.
    </p>
    <p>
      <strong>4. Maintain Consistent Pacing:</strong> A common mistake is overloading slides with information. Keep slides concise and move at a rhythm that allows for reflection without dragging. Falcon's smart pacing assistant analyzes the density of your slides and recommends optimal time per slide, helping you maintain the audience's focus from start to finish.
    </p>
    <p>
      <strong>5. Deliver Compelling Calls to Action (CTAs):</strong> Every presentation should aim to move the audience toward something—be it adopting a new idea, purchasing a product, or supporting a cause. Your CTAs should be visually and emotionally compelling. With Falcon’s template library for CTAs, crafting irresistible end slides has never been easier.
    </p>
    <p>
      Remember, even the best tools are merely extensions of your intent. The heart of a great presentation lies in empathy: understanding what your audience needs and delivering it in a way that resonates deeply.
    </p>
  </div>

  <div className="blog-article">
    <h3>Design Trends for 2025 Presentations</h3>
    <p>
      As we move deeper into the 2020s, the landscape of presentation design continues to evolve at an exhilarating pace. Staying ahead of these trends is essential if you want your presentations to feel fresh, modern, and impactful. Here are some of the key design directions shaping 2025 and beyond:
    </p>
    <p>
      <strong>Softer Pastel Gradients:</strong> Harsh neons and stark contrasts are giving way to soothing, atmospheric pastel gradients that provide warmth and depth without overwhelming the viewer. Falcon’s 2025 template series comes preloaded with customizable pastel overlays, allowing presenters to create inviting backdrops effortlessly.
    </p>
    <p>
      <strong>Animated Minimalist Transitions:</strong> Gone are the days of clunky slide flips and jarring wipes. Subtle, minimalist animations—like gentle fades, slow zooms, and understated motion paths—are setting the standard. These transitions keep attention fluid without distracting from content. Falcon's animation engine allows users to preview and apply transitions that feel natural and elegant.
    </p>
    <p>
      <strong>Asymmetric Grid Layouts:</strong> Perfect symmetry is being replaced by dynamic asymmetry, where elements are intentionally offset to create movement and intrigue. Asymmetrical designs can evoke creativity, innovation, and boldness when done correctly. Falcon’s smart layout suggestions can automatically create beautiful, non-traditional grids that balance visual weight intelligently.
    </p>
    <p>
      <strong>AI-Curated Theme Packs:</strong> Rather than forcing users to pick from static themes, Falcon’s AI curates dynamic theme packs based on the content type, tone, and audience demographic. Imagine uploading your draft script and having Falcon propose three visually stunning, fully customizable presentation packages tailored to your goals.
    </p>
    <p>
      <strong>Voice-Interactive Presentations:</strong> While still emerging, voice-driven navigation in presentations—such as saying "next slide" or "highlight this point"—is starting to reshape live engagements. Falcon is currently beta-testing its voice-assistant features, aiming to free presenters from remote controls or clickers entirely.
    </p>
    <p>
      Staying ahead of trends isn't about blindly chasing fads. It’s about understanding what resonates today while building flexibility for tomorrow. Falcon helps users future-proof their presentation strategy by offering both timeless templates and cutting-edge innovation.
    </p>
  </div>

  <div className="blog-article">
    <h3>Case for AI in Education</h3>
    <p>
      Education has always been about more than the transfer of knowledge; it’s about empowerment, critical thinking, creativity, and preparing learners for a dynamic world. Yet, outdated technologies and methodologies often weigh down teachers and students alike. Enter AI-powered solutions like Falcon, designed to revolutionize the educational experience.
    </p>
    <p>
      Teachers traditionally spend countless hours formatting lesson plans, creating visual aids, and designing slideshows that might only be used once. Falcon streamlines this entire process. By automating formatting and layout decisions, it frees up valuable time that teachers can redirect toward personalizing instruction and innovating pedagogy.
    </p>
    <p>
      For students, who often struggle with designing aesthetically pleasing presentations while juggling research, writing, and rehearsing, Falcon serves as an equalizer. It removes the intimidation factor from the presentation creation process, allowing students to focus on substance rather than appearance.
    </p>
    <p>
      Beyond efficiency, Falcon fosters inclusivity in education. Its accessible templates, real-time grammar support, and visual readability checks ensure that all students, regardless of learning style or physical ability, can create work that meets high standards.
    </p>
    <p>
      Universities and schools are increasingly adopting AI-driven design tools not only for presentations but also for creating entire curricula, virtual classrooms, and academic publishing. Falcon’s platform supports collaborative editing, real-time feedback, and seamless LMS (Learning Management System) integration, making it a future-ready solution for the classrooms of tomorrow.
    </p>
    <p>
      The future of education is not about replacing teachers with machines—it’s about giving educators and students better tools to unlock their full potential. Falcon is proud to be part of that movement, helping institutions modernize their learning environments without losing the heart of teaching: human connection.
    </p>
  </div>

  <div className="blog-article">
    <h3>10 Presentation Mistakes to Avoid</h3>
    <p>
      Even the most seasoned presenters occasionally stumble into common traps that can undermine their efforts. Awareness of these pitfalls—and how Falcon can help you avoid them—can elevate your work from good to outstanding:
    </p>
    <p>
      <strong>1. Overcrowded Slides:</strong> Trying to cram too much information into a single slide overwhelms audiences. Falcon’s content analysis engine alerts users when their slides become overly dense and suggests concise rewording.
    </p>
    <p>
      <strong>2. Inconsistent Design Language:</strong> Mixing font styles, color schemes, or image styles creates visual chaos. Falcon’s brand consistency checker ensures a uniform aesthetic throughout your deck.
    </p>
    <p>
      <strong>3. Poor Font Choices:</strong> Decorative fonts might look fun but kill readability. Falcon recommends modern, professional fonts tailored to audience and context.
    </p>
    <p>
      <strong>4. Lack of Visual Hierarchy:</strong> If every element has the same size and emphasis, nothing stands out. Falcon automates sizing and contrast adjustments to create a clear hierarchy.
    </p>
    <p>
      <strong>5. Ineffective Data Visualization:</strong> A boring pie chart won’t move anyone. Falcon suggests animated graphs, creative comparisons, and data storytelling techniques.
    </p>
    <p>
      <strong>6. Ignoring Accessibility:</strong> Many presenters forget colorblind-friendly palettes or font size considerations. Falcon automatically checks for accessibility compliance.
    </p>
    <p>
      <strong>7. Relying on Stock Photos:</strong> Generic imagery disconnects from real narratives. Falcon’s AI visual search recommends images based on emotional tone and topic.
    </p>
    <p>
      <strong>8. Overuse of Bullet Points:</strong> Bullet overload kills engagement. Falcon’s slide templates encourage storytelling through visuals and minimal text.
    </p>
    <p>
      <strong>9. Forgetting the Narrative Arc:</strong> Randomly ordered slides confuse audiences. Falcon’s storyboarding feature ensures logical, persuasive sequencing.
    </p>
    <p>
      <strong>10. Weak Call to Action:</strong> Ending with a whimper instead of a bang loses opportunities. Falcon’s CTA templates help presenters close strong, turning inspiration into action.
    </p>
    <p>
      Avoiding these mistakes doesn’t just make your presentation prettier—it makes it more effective, persuasive, and memorable. Falcon ensures you can focus on your story, while the AI handles the heavy lifting behind the scenes.
    </p>
  </div>

</section>

        {/* FAQ Section */}          
      
   <section className="faq-section" data-aos="fade-right">          
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
              <section className="case-studies"data-aos="fade-up" data-aos-delay="200" >          
          <h2 className="section-heading">Case Studies: Real User Success</h2>          

          <div className="case-study-item"         data-aos="fade-up" data-aos-delay="200">
            <h4>Startup Founder Cuts Deck Creation Time by 90%</h4>
            <p>Raj, a startup founder in Bangalore, used FalconAI to generate his investor pitch deck in minutes—freeing up valuable time to polish his pitch and focus on business strategy.</p>
          </div>

          <div className="case-study-item"         data-aos="fade-up" data-aos-delay="300">
            <h4>Teacher Saves 6 Hours a Week</h4>
            <p>Meena, a high school teacher, now prepares lesson slides in minutes. With FalconAI’s intuitive interface, she focuses more on engaging students and less on slide design.</p>
          </div>

          <div className="case-study-item"         data-aos="fade-up" data-aos-delay="400">
            <h4>Engineering Student Impresses Professors</h4>
            <p>Ankit used FalconAI for his final year project. With professional design and AI-structured flow, his presentation stood out and got top marks from his professors.</p>
          </div>

          <div className="case-study-item"         data-aos="fade-up" data-aos-delay="500">
            <h4>Marketing Team Boosts Productivity</h4>
            <p>A 5-member marketing team used FalconAI to create client presentations 3x faster. They’ve integrated it into their workflow and now deliver designs with faster turnaround.</p>
          </div>

          <div className="case-study-item"         data-aos="fade-up" data-aos-delay="600">
            <h4>Freelancer Wins More Clients</h4>
            <p>Sana, a freelance content creator, added presentation services to her portfolio using FalconAI. She now delivers presentations in record time and has doubled her client base.</p>
          </div>
        </section>          

        

        {/* Call to Action Section */}          
         <section className="cta-section"
        data-aos="fade-up" data-aos-delay="200">          
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