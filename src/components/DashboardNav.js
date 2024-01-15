import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/DashboardNav.css'; // Ensure updated styles are in place

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <div className="nav-links">
        <NavLink to="/new-query" activeClassName="active">New Query</NavLink>
        <NavLink to="/my-queries" activeClassName="active">My Queries</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/signout" activeClassName="active">Sign Out</NavLink>
      </div>
    </nav>
);
}

export default DashboardNav;