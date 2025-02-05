import React, { useState } from "react";
import "./header.css";

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // state for toggling hamburger menu

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header
      className={`header ${isHovered ? "white-bg" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logo">
        <img 
         src={isHovered ? "public/logo-black.png" : "public/logo-white.png"} 
        alt="INFINITY LIVING" />
      </div>
      <nav>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {/* ABOUT */}
            <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">About</a>
            <div className="submenu">
              <div className="submenu-content">
                <h3>About</h3>
              
                <div id="submenu-links">
                  <a href="#">Our purpose</a>
                  <a href="#">Our values</a>
                  <a href="#">Our culture</a>
                  <a href="#">Strategy</a>
                  <a href="#">Leadership</a>
                  <a href="#">Research & Development</a>
                  <a href="#">Health & Safety</a>
                  <a href="#">Global reach</a>
                  <a href="#">Making steel</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
            </div>
          </li>

          {/* Steel Homes */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Climate Action</a>
          <div className="submenu">
              <div className="submenu-content">
                <h3>Steel Homes </h3>
             
                <div id="submenu-links">
                  <a href="#">
                  Steel's sustainability credentials </a>
                  <a href="#">
                  Leading our industry’s efforts to decarbonise </a>
                  <a href="#">
                  Technology pathways to net-zero steel </a>
                  <a href="#">
                  Decarbonisation technologies </a>
                  <a href="#">Leadership</a>
                  <a href="#">Research & Development</a>
                  <a href="#">Health & Safety</a>
                  <a href="#">Global reach</a>
                  <a href="#">Making steel</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
            </div>
            </li>

            {/* PRODUCTS  */}
            <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Products</a>
            <div className="submenu">
              <div className="submenu-content">
                <h3>PRODUCTS</h3>
          
                <div id="submenu-links">
                  <a href="#">Our purpose</a>
                  <a href="#">Our values</a>
                  <a href="#">Our culture</a>
                  <a href="#">Strategy</a>
                  <a href="#">Leadership</a>
                  <a href="#">Research & Development</a>
                  <a href="#">Health & Safety</a>
                  <a href="#">Global reach</a>
                  <a href="#">Making steel</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
            </div>
            </li>

        {/* Sustainablity */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Sustainablity</a>
            <div className="submenu">
              <div className="submenu-content">
                <h3>Sustainablity</h3>
          
                <div id="submenu-links">
                  <a href="#">Our 10 SD Outcomes</a>
                  <a href="#">Approach</a>
                  <a href="#">ResponsibleSteel</a>
                  <a href="#">UN Sustainable Development Goals</a>
                  <a href="#">Governance</a>
                  <a href="#">Human Rights</a>
                  
                </div>
              </div>
            </div>
            </li>
        {/* Projects  */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Projects</a>
            </li>

        {/* Investors  */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Investors</a>
            <div className="submenu">
              <div className="submenu-content">
                <h3>Investors</h3>
          
                <div id="submenu-links">
                  <a href="#">Our purpose</a>
                  <a href="#">Our values</a>
                  <a href="#">Our culture</a>
                  <a href="#">Strategy</a>
                  <a href="#">Leadership</a>
                  <a href="#">Research & Development</a>
                  <a href="#">Health & Safety</a>
                  <a href="#">Global reach</a>
                  <a href="#">Making steel</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
            </div>
            </li>

        {/*Careers */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Careers</a>
            <div className="submenu">
              <div className="submenu-content">
                <h3>Careers</h3>
            
                <div id="submenu-links">
                  <a href="#">Rewards and benefits</a>
                  <a href="#">Career progression</a>
                  <a href="#">Graduates and students</a>
                  <a href="#">Experienced professionals</a>
                  <a href="#">Diverse talent enables smarter steels</a>
                  <a href="#">Frequently asked questions</a>
                  <a href="#">Search our jobs</a>
                  
                </div>
              </div>
            </div>
            </li>
        {/*Media */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Media</a>
          <div className="submenu">
              <div className="submenu-content">
                <h3>Media</h3>
          
                <div id="submenu-links">
                  <a href="#">News articles</a>
                  <a href="#">Press releases</a>
                  <a href="#">Get in touch</a>
    
                </div>
              </div>
            </div>
          </li>
        {/* Smarter Future */}
        <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#">Smarter Future</a>
          <div className="submenu">
              <div className="submenu-content">
                <h3>Smarter Future</h3>
          
                <div id="submenu-links">
                  <a href="#">The Steel Works</a>
                  <a href="#">The Futurising Podcast</a>
              
    
                </div>
              </div>
            </div>
          </li>
        </ul>

         {/* Hamburger Icon */}
         <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {/* <div className="extras">
        <span className="stock-price">MT:NA €24.39</span>
        <span className="icon globe">🌍</span>
        <span className="icon search">🔍</span>
      </div> */}
    </header>
  );
}

export default Header;
