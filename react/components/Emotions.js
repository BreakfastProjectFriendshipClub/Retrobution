import React from 'react';
import { Link } from 'react-router' 

const Emotions = () => {
  return (
      <div> 
        <Link to="/happy"> :] </Link> 
        <Link to="/meh"> :| </Link> 
        <Link to="/sad"> :[ </Link> 
        <p>Hello from Emotions, you dirty animal!</p>
      </div>
      )
};

export default Emotions;