import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Liste from './components/liste';
import Liste2 from './components/liste2';
import MonVol from './components/mon-vol';

const Main = () => {
  return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/liste' component={Liste}></Route>
        <Route exact path='/liste2' component={Liste2}></Route>
        <Route exact path='/mon-vol' component={MonVol}></Route>
      </Switch>
  );
};

export default Main;
