import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav';
import '../styles/NewQueriesPage.css';

function NewQueriesPage() {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryDescription, setQueryDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Submitting:', queryTitle, queryDescription);
  };

  return (
    <div className="new-queries-page">
      <Header />
      <DashboardNav />
      <div className="new-queries-container">
        <h2>New Query</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="queryTitle">Query Title:</label>
            <input
              type="text"
              id="queryTitle"
              value={queryTitle}
              onChange={(e) => setQueryTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="queryDescription">Query Description:</label>
            <textarea
              id="queryDescription"
              value={queryDescription}
              onChange={(e) => setQueryDescription(e.target.value)}
            />
          </div>
          <button type="submit">Submit Query</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewQueriesPage;
