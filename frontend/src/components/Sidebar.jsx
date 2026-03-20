import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  return (
    <div className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeSidebar}>
        <i className="fa-solid fa-house"></i> Home
      </Link>
      <Link to="/find-donors" className={location.pathname === '/find-donors' ? 'active' : ''} onClick={closeSidebar}>
        <i className="fa-solid fa-magnifying-glass"></i> Find Donors
      </Link>
      <Link to="/auth" className={location.pathname === '/auth' ? 'active' : ''} onClick={closeSidebar}>
        <i className="fa-solid fa-user"></i> Login / Sign Up
      </Link>
    </div>
  );
};

export default Sidebar;
