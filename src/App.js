import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageEmployees from './pages/ManageEmployees';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/manage" className="nav-link">Manage Employees</Link>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage" element={<ManageEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;
