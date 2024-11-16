import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Courses</h1>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/fullstack" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Full Stack Development
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/datascience" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cybersecurity" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Cyber Security
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/career" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Career
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
