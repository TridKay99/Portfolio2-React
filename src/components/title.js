import React from 'react';
import '../App.css';
import fb from '../linkPics/fb.png'
import git from '../linkPics/git.png'
import linked from '../linkPics/linked.png'

import {Link} from 'react-router-dom'


function Title() {

return (
  <div className="firstContainer">
    <div className="titleBox">
      <div className="openingTitle">
          <h1>Tristan Kay</h1>
          <p>Full-stack web developer</p>
          <p>film-editor & student at</p>
          <p>Coder Academy</p>
      </div>
    </div>
    <div className="linkBox">
      <div className="picLinks">
        <a href="https://www.facebook.com/tris.kay.9">
        <img className="fbLink" src={fb} width="100" height="100"/>
        </a>
        <a href="https://github.com/TridKay99">
        <img className="gitLink" src={git} width="100" height="100"/>
        </a>
        <a href="https://www.linkedin.com/in/tristan-kay-61459911a/">
        <img className="linkLink" src={linked} width="100" height="100"/>
        </a>
        <div className="wordLinks">
          <Link  to="/skills">
            <li>Skills</li>
          </Link>
          <Link  to="/projects">
            <li>Projects</li>
          </Link>
        </div>
      </div>
    </div>
  </div>
)}

export default Title;
