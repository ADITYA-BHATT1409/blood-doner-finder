import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" style={{textDecoration: 'none'}}>
          <div className="logo-icon"><i className="fa-solid fa-droplet"></i></div>
          <span>BloodConnect</span>
        </Link>
        <div className="nav-actions" style={{marginLeft: 'auto'}}>
          <Link to="/register-donor">
            <button className="btn-secondary">Register as Donor</button>
          </Link>
        </div>
        <div className="mobile-menu-btn" onClick={toggleSidebar} style={{marginLeft: '20px'}}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
