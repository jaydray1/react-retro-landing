import * as React from 'react';
import './RetroProjects.css';

export const RetroProjects = () => {
  return (
    <div className="main-pro-wrapper">
      <h1 className="projects-header">Projects</h1>
      <div className="pro-stamp">
          <a href="https://youtu.be/QZPfwbL5fHs" target="_blank">
            <div className="link-container">
              <h2 className="link-title">Virtual Library</h2>
            </div>
          </a>
      </div>
      <div className="pro-stamp">
      <a href="https://cudemo.goalexandria.com/offline" target="_blank">
        <div className="link-container">
          <h2 className="link-title">Offline Data Entry</h2>
        </div>
        </a>
      </div>
      <div className="pro-stamp">
        <div className="link-container">
          <h2 className="link-title">Outdoor Gear</h2>
        </div>
      </div>
  </div>
  )
}

export default RetroProjects;