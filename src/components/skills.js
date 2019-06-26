import React from 'react';
import '../App.css';

import ruby from '../skillsIMG/ruby.png'
import js from '../skillsIMG/JS.jpg'
import html from '../skillsIMG/html.png'
import css from '../skillsIMG/css.png'
import rails from '../skillsIMG/rails.png'
import git2 from '../linkPics/git.png'
import heroku from '../skillsIMG/heroku.png'
import mongo from '../skillsIMG/mongo.png'
import react from '../skillsIMG/react.png'
import premiere from '../skillsIMG/premiere.png'
import after from '../skillsIMG/after_effects.png'
import photoshop from '../skillsIMG/photoshop.png'

import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'


function Greetings(props) {
  return (
    <Fade bottom cascade>
    <div>
      <img src={props.img} width="70" height="70"/>
      <p>{props.name}</p>
    </div>
    </Fade>
  )
}


function Skills() {
  const skills =['Ruby','Javascript','HTML','CSS','Rails','GitHub','Heroku','MongoDB','React','Premiere Pro','After Effects']
  const skillsImg = [ruby,js,html,css,rails,git2,heroku,mongo,react,premiere,after,photoshop]

  let keySkills = [];

  for(let i = 0; i < skills.length; i++) {
    keySkills.push(<Greetings key={i} name={skills[i]} img={skillsImg[i]} />);
  }
  return (
    <div className="secondContainer">
      <div className="secondTitle">
      <h1>SKILLS</h1>
      </div>
      <div className="skills">
        {keySkills}
      </div>
      <div className="wordLinksTitle">
        <Link  to="/">
          <li>Home</li>
        </Link>
        <Link  to="/projects">
          <li>Projects</li>
        </Link>
      </div>
    </div>
  )
}

export default Skills;
