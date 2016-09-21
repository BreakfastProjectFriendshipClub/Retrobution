import React from 'react';
import Emotions from './Emotions'

let App = props => {
  return (
    <div>
      <Emotions />
      {props.children}
    </div>
  );
};

export default App;
