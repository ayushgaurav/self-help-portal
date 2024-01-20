import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav';
import '../styles/QueryDetailsPage.css';

function QueryDetailsPage() {
  const { queryId } = useParams();

  // Sample tag options
  const tagOptions = ["Tag1", "Tag2", "Tag3", "Tag4"];

  // State for query details and selected tag
  const [queryDetails, setQueryDetails] = useState({
    index: queryId,
    title: `Query Title ${queryId}`,
    description: 'Detailed description here...',
    tag: 'Tag1' // Initially selected tag
  });
  const [selectedTag, setSelectedTag] = useState(queryDetails.tag);

  // Handle tag update
  const handleTagUpdate = () => {
    setQueryDetails({ ...queryDetails, tag: selectedTag });
    // Here, you can also add logic to update the tag in your backend or state management
  };

  return (
    <div className="query-details-page">
      <Header />
      <DashboardNav />
      <div className="query-details-container">
        <div className="query-details">
          <h2>Query Details</h2>
          <p><strong>Index:</strong> {queryDetails.index}</p>
          <p><strong>Title:</strong> {queryDetails.title}</p>
          <div className="description-box">
            <strong>Description:</strong>
            <div className="description-content">{queryDetails.description}</div>
          </div>
          <p><strong>Tag:</strong> {queryDetails.tag}</p>
        </div>
        <div className="tag-update-container">
          <h3>Update Tag</h3>
          <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
            {tagOptions.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <button onClick={handleTagUpdate}>Update Tag</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QueryDetailsPage;
