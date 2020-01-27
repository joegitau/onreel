import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
