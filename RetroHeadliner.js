import * as React from 'react';
import './RetroHeadliner.css';

export const RetroHeadliner = () => {
  const myName = 'Jon-Michael Dreher'
return (
  <>
    <div className="name-headliner">
      <h1 className="namer"> {myName} </h1>
    </div>
  </>
  )
}

export default RetroHeadliner;