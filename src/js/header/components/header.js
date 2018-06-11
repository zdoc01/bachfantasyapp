import React from 'react';
import { Link } from 'react-router-dom';
import RightNav from '../containers/right-nav';

export default () => (
  <header className="app-header">
    <nav className="nav-bar clearfix container">
      <ul className="left-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <RightNav />
    </nav>
  </header>
);
