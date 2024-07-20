import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hd.css';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  // const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleExploreClick = () => {
    const sectionToScroll = document.getElementById("enquire-section");
    if (sectionToScroll) {
      window.scrollTo({
        top: sectionToScroll.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Tutor4uOnline</h1>
        <p>Let's Brush Up Your Skills</p>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${isNavActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <button onClick={handleExploreClick}>Join</button>
          {/* <li><Link to="/signup">Signup</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
