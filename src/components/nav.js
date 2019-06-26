import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="Nav">
        <ul className="navLinks">
          <Link  to="/">
            <li>Home</li>
          </Link>
          <Link  to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;