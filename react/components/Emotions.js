import React from 'react';
import { Link } from 'react-router'

const Emotions = () => {
  return (
      <div className="emotions">
        <Link to="/happy">
          <div className="happy-icon emotion-icon" />
        </Link>
        <Link to="/meh">
          <div className="meh-icon emotion-icon" />
        </Link>
        <Link to="/sad">
          <div className="sad-icon emotion-icon" />
        </Link>
      </div>
      )
};

export default Emotions;
