import { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="Home"><span>Bo</span>ma.</a>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="Home"><span className="ho-me">Home</span></a>
          </li>
          <li>
            <a href="AboutMe">About</a>
          </li>
          <li>
            <a href="Projects">Projects</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`fries-icon ${isMenuOpen ? "open" : ""}`}>
          <div className="fries-bar"></div>
          <div className="fries-bar"></div>
          <div className="fries-bar"></div>
        </div>
      </div>
      
    </nav>
   
  );
};

export default Navbar;
