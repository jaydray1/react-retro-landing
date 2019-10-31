import * as React from 'react';
import './RetroLinkedin.css';

export const RetroLinkedin = ({ mainImage }) => {
mainImage = 'https://s3-us-west-1.amazonaws.com/marmot-clone-start/me_cutout.png';
  return (
    <div className="banner-container">
      <img src={mainImage} alt='me vice'/>
      <button className="linkedin-button">
        <a href="https://www.linkedin.com/in/jonmichaeldreher/" target="_blank"></a>
      </button>
    </div>
  )
}

export default RetroLinkedin;