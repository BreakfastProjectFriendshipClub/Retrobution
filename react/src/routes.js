import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import {
  HappyWrapper,
  MehWrapper,
  SadWrapper
} from './../components/EmotionWrappers'

let routes = (
  <Route path="/" component={App}>
    <Route path="/happy" component={HappyWrapper}/>
    <Route path="/meh" component={MehWrapper}/>
    <Route path="/sad" component={SadWrapper}/>
  </Route>
);

export default routes;
