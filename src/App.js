import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import NewQueriesPage from './pages/NewQueriesPage';
import MyQueriesPage from './pages/MyQueriesPage';
import QueryDetailsPage from './pages/QueryDetailsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/new-query" element={<NewQueriesPage />} />
        <Route path="/my-queries" element={<MyQueriesPage />} /> 
        <Route path="/query-details/:queryId" element={<QueryDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
