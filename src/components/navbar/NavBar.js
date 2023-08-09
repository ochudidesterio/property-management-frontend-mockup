import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <nav className="navbar">
      <ul className="tabs">
        <li
          className={activeTab === 0 ? "tab active" : "tab"}
          onClick={() => handleTabClick(0)}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={activeTab === 1 ? "tab active" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          <Link to="/clients">Clients</Link>
        </li>
        <li
          className={activeTab === 2 ? "tab active" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          <Link to="/reports">Reports</Link>
        </li>
       
        <li
          className={activeTab === 3 ? "tab active" : "tab"}
          onClick={() => handleTabClick(3)}
        >
          <Link to="/tenant">Tenants</Link>
        </li>
        <li
          className={activeTab === 4 ? "tab active" : "tab"}
          onClick={() => handleTabClick(4)}
        >
          <Link to="/about">About Us</Link>
        </li>
        <li
          className={activeTab === 5 ? "tab active" : "tab"}
          onClick={() => handleTabClick(5)}
        >
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
