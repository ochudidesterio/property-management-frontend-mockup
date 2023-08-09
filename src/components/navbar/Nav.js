import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/clients">Deslabs</a>
      </div>
      <ul className={`navbar-links ${isActive ? "active" : ""}`}>
        <li>
          <a href="/contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
        <li>
          <a href="/account" onClick={handleLinkClick}>
            Account
          </a>
        </li>
        <li>
          <a href="#" className="navbar-menu-icon" onClick={handleMenuClick}>
            {isActive ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </a>
          <ul className="navbar-dropdown">
            <li>
              <a href="/link1" onClick={handleLinkClick}>
                Link 1 test ssgsg
              </a>
            </li>
            <li>
              <a href="/link2" onClick={handleLinkClick}>
                Link 2
              </a>
            </li>
            <li>
              <a href="/link3" onClick={handleLinkClick}>
                Link 3
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
