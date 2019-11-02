import * as React from 'react';
import './RetroLinkedin.css';

export const RetroLinkedin = ({ mainImage }) => {
mainImage = 'https://s3-us-west-1.amazonaws.com/marmot-clone-start/me_cutout.png';
  return (
    <div className="banner-container">
      <img src={mainImage} alt='me vice'/>
      <div className="below-button">
        <a href="https://www.linkedin.com/in/jonmichaeldreher/" target="_blank">
          <button className="linkedin-button" /> 
        </a>
      </div>
    </div>
  )
}

export default RetroLinkedin;