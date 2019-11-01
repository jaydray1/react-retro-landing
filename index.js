import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import RetroHeadliner from './RetroHeadliner';
import RetroLinkedin from './RetroLinkedin';
import RetroProjects from './RetroProjects';
import RetroTechLinks from './RetroTechLinks';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-app">
        <div className="component-container">
          <RetroHeadliner className="header"></RetroHeadliner>
          <div className="middle-main-split">
            <RetroLinkedin className="linked"></RetroLinkedin>
            <RetroProjects className="projects"></RetroProjects>
          </div>
          <RetroTechLinks className="tech"></RetroTechLinks>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
