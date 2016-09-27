import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Emotions from '../components/Emotions';

let routes = (
  <Route path="/" component={App}>
     <IndexRoute component={Emotions}/>
     <Route path="/happy" component={Happy}/>
     <Route path="/meh" component={Meh}/>
     <Route path="/sad" component={Sad}/>
  </Route>
);

export default routes;
