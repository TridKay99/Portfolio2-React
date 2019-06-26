import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom'

import resume from '../projectIMG/TristanKayResume.png'



function App() {
  return (
    <div className="fourthContainer">
      <h1>Contact Me?</h1>
      <p>tridkay90@gmail.com</p>
      <a href={resume} download >Download Resume</a> 
    </div>
  );
}

export default App;
