import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Emotions from '../components/Emotions';

let routes = (
  <Route path="/" component={App}>
     <IndexRoute component={Emotions}/>
     <Route path="/happy" component={Emotions}/>
     <Route path="/meh" component={Emotions}/>
     <Route path="/sad" component={Emotions}/>
  </Route>
);

export default routes;
