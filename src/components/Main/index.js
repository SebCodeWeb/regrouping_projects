import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accueil from './Accueil';
import Cv from './Cv';

const Main = () => (
  <article className="main">
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/cv-bien-oui-merci" component={Cv} />
    </Switch>
  </article>
);
export default Main;
