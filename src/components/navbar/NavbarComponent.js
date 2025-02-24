import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarComponent.css';

import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => {
    setIsNavOpen(false); 
  };   
  
  return (
    <header className="nav_header">
      <div className="nv_logo" onClick={closeNav} style={{ cursor: 'pointer' }}>
        <Link to="/">
          <img className="logo_class" src={logo} alt="logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} hidden />
      <nav style={{ left: isNavOpen ? '0' : '-300px', transition: 'left 0.3s ease-in-out' }}>
        <div className="nv_logo">
          <Link to="/">
            <img className="logo_class" src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/admission" className={location.pathname === '/admission' ? 'active' : ''} onClick={closeNav}>
              Admission
            </Link>
          </li>
          <li>
            <Link to="/facilities" className={location.pathname === '/facilities' ? 'active' : ''} onClick={closeNav}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/teacher" className={location.pathname === '/teacher' ? 'active' : ''} onClick={closeNav}>
              Teacher
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeNav}>
              Contact
            </Link>
          </li>
          
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
