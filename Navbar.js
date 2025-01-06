import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student</h1>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
