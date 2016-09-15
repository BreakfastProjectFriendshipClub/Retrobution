import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { routerReducer as routing } from 'react-router-redux';


let aReducer = (state = "", action) => {
  return state;
}

let rootReducer = combineReducers({ aReducer, routing })



let configureStore = () => {
  let middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];
  let store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store
};

export default configureStore;
