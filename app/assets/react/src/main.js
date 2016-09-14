import { createStore, combineReducers } from 'redux';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


let renderApp = () => {
  debugger
  ReactDOM.render(
    <p>"Hello, World!"</p>,
    document.getElementById('app')
  )
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(renderApp);
