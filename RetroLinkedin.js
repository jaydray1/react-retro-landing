import * as React from 'react';
import './RetroLinkedin.css';

export const RetroLinkedin = ({ mainImage }) => {
mainImage = 'https://s3-us-west-1.amazonaws.com/marmot-clone-start/me_cutout.png';
  return (
    <div className="banner-container">
      <img src={mainImage} alt='me vice'/>

    <div className='button-holder'>
      <div className="below-button">
        <a href="https://www.linkedin.com/in/jonmichaeldreher/" target="_blank">
          <button className="btn cta">
          <span style={{fontSize: '2.5rem'}}>LinkedIn</span>
          </button>
        </a>
      </div>

      <div className="below-button">
        <a href="https://drive.google.com/open?id=0B3ROmtwfUntWbE9aTE00TXE4b01kNXFqcTNyMHNNcC1CX2o0" target="_blank">
          <button className="btn cta">
            <span style={{fontSize: '2.5rem'}}>Resume</span>
          </button> 
        </a>
      </div>
    </div>
    </div>
  )
}

export default RetroLinkedin;