import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav'; // Reusing DashboardNav
import '../styles/QueryDetailsPage.css';

function QueryDetailsPage() {
  const { queryId } = useParams();

  // Placeholder data
  const queryDetails = {
    index: queryId,
    title: `Query Title ${queryId}`,
    description: `This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum...This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.This is a detailed and potentially very long description for query ${queryId}. Lorem ipsum.`,
    tags: ['Tag1', 'Tag2']
  };

  return (
    <div className="query-details-page">
      <Header />
      <DashboardNav /> {/* Navigation bar */}
      <div className="query-details-container">
        <h2>Query Details</h2>
        <p><strong>Index:</strong> {queryDetails.index}</p>
        <p><strong>Title:</strong> {queryDetails.title}</p>
        <div className="description-box">
          <strong>Description:</strong>
          <div className="description-content">{queryDetails.description}</div>
        </div>
        <p><strong>Tags:</strong> {queryDetails.tags.join(", ")}</p>
        {/* Back button or other functionalities */}
      </div>
      <Footer />
    </div>
  );
}

export default QueryDetailsPage;
