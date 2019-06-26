import React from 'react';
import './App.css';

import Nav from './components/nav'
import Skills from './components/skills'
import Title from './components/title'
import Thisfunc from "./components/carousel"
import contact from './components/contact'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/" exact component={Title} />
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Thisfunc}/>
          <Route path="/contact" component={contact}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
