import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="./file_00000000a16061f7b8821c2367ff4369_conversation_id=67fe5f03-8e98-800f-a3c6-6c55f1a4653e&message_id=82c616d9-5db9-4a25-b1ee-9d5dcd9a0c3f.png" alt="FalconAI Logo" className="logo-img" />
          <span>Falcon</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-desktop">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">AI PPT Maker</Link></li>
          <li><Link to="/search">AI-Assistant</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/policy">Privacy Policy</Link></li>
        </ul>

        {/* Hamburger Menu (Visible on Mobile Only) */}
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      {/* Sidebar Navigation Menu (Mobile Only) */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>AI PPT Maker</Link></li>
          <li><Link to="/search" onClick={() => setIsMenuOpen(false)}>AI-Assistant</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/terms" onClick={() => setIsMenuOpen(false)}>Terms and Conditions</Link></li>
          <li><Link to="/policy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
