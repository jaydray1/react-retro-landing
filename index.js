import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import RetroHeadliner from './RetroHeadliner';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="main-app">
        <div className="component-container">
          <RetroHeadliner className="header"></RetroHeadliner>
          <div class="middle-main-split">
            <app-retro-linkedin class="linked"></app-retro-linkedin>
            <app-retro-projects class="projects"></app-retro-projects>
          </div>
          <app-retro-tech-links class="tech"></app-retro-tech-links>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
