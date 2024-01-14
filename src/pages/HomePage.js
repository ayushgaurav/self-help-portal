import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Importing Header component
import Footer from '../components/Footer'; // Importing Footer component
import '../styles/HomePage.css'; // Importing HomePage CSS

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <h1>Welcome to the Self Help Portal</h1>
        <div className="navigation-links">
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
