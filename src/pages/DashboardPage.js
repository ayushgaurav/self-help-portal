import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav'; // Import the new DashboardNav
import '../styles/DashboardPage.css';

function DashboardPage() {
  // Dashboard specific logic and state

  return (
    <div className="dashboard-page">
      <Header />
      <DashboardNav /> {/* Include the Dashboard navigation */}
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        {/* Dashboard specific content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
