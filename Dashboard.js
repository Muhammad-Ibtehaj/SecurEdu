import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Users</h2>
        <p>1000 Active Users</p>
      </div>
      <div className="card">
        <h2>Revenue</h2>
        <p>$12,345</p>
      </div>
      <div className="card">
        <h2>Performance</h2>
        <p>5%</p>
      </div>
    </div>
  );
};

export default Dashboard;
