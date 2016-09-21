import React from 'react';
import Notes from './Notes';

const HappyWrapper = () => {
  return <Notes emotion="happy" />;
};
const MehWrapper = () => {
  return <Notes emotion="meh" />;
}
const SadWrapper = () => {
  return <Notes emotion="sad" />;
}

export {
  HappyWrapper,
  MehWrapper,
  SadWrapper
}
