import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav';
import '../styles/MyQueriesPage.css';

function MyQueriesPage() {
  // Sample data for demonstration
  const queries = [
    { index: 1, title: "Query Title 1", tags: ["Tag1", "Tag2"], description: "Description 1" },
    { index: 2, title: "Query Title 2", tags: ["Tag3", "Tag4"], description: "Description 2" },
    // ... more queries
  ];

  return (
    <div className="my-queries-page">
      <Header />
      <DashboardNav />
      <div className="my-queries-container">
        <h2>My Queries</h2>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries.map(query => (
              <tr key={query.index}>
                <td>{query.index}</td>
                <td>{query.title}</td>
                <td>{query.tags.join(", ")}</td>
                <td>
                  <Link to={`/query-details/${query.index}`}>More Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default MyQueriesPage;
