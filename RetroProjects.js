import * as React from 'react';
import './RetroProjects.css';
import './RetroLinkedin.css';

export const RetroProjects = () => {
  return (
    <div className="main-pro-wrapper">
      <div className="btn">
          <a href="https://youtu.be/QZPfwbL5fHs" target="_blank">
              <h2 className="link-title">Virtual Library</h2>
          </a>
      </div>
      <div className="btn">
      <a href="https://cudemo.goalexandria.com/offline" target="_blank">
          <h2 className="link-title">Offline Data Entry</h2>
        </a>
      </div>
      <div className="btn">
      <a href="https://cranky-hoover-5a469d.netlify.com/" target="_blank">
          <h2 className="link-title">Outdoor Gear</h2>
        </a>
      </div>
  </div>
  )
}

export default RetroProjects;