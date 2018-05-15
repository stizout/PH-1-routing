import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';
import NotFound from './NotFound/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" render={() => {
      return (
        <About>
          <Route path="/about/faq" component={FAQ} />
          <Route path="/about/company" component={Company} />
        </About>
      )
    }} />
    <Route exact path="/people" component={People} />
    <Route path="/people/:id" component={Character} />
    <Route path="" component={NotFound} />
  </Switch>
)