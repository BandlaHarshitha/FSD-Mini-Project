// src/components/Homepage.js

import React from 'react';
import './Homepage.css';  

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="header">
        <h1 className="hospital-name">HMS Hospital</h1>
      </div>

      <div className="info-card">
        <h2>Our Ideologies</h2>
        <p>
          At HMS Hospital, we believe in providing compassionate, high-quality healthcare for all our patients. Our core values are:
        </p>
        <ul>
          <li>Patient Care </li>
          <li>Integrity </li>
          <li>Excellence </li>
          <li>Innovation </li>
        </ul>
      </div>

      
    </div>
  );
}

export default Homepage;
