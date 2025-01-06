import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/scholarship">Scholarship</a></li>
        <li><a href="/financial aid">Financial Aid</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
