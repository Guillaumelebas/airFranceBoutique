import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Liste from './components/liste';
import ResultatRecherche from './components/resultat-recherche';
import MonVol from './components/mon-vol';
import Paiement from './components/paiement';

const Main = () => {
  return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/liste' component={Liste}></Route>
        <Route exact path='/resultat-recherche' component={ResultatRecherche}></Route>
        <Route exact path='/mon-vol' component={MonVol}></Route>
        <Route exact path='/paiement' component={Paiement}></Route>
      </Switch>
  );
};

export default Main;
