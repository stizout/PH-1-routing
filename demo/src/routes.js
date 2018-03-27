import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Character from './components/Character/Character';

const routes = <div>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/people">People</Link>
  </nav>
  This is App.js
  <Route exact path="/" component={Home} />
  <Route path="/about" render={() => <About>
    <Route path="/about/faq" component={FAQ} />
    <Route path="/about/company" component={Company} />
  </About>} />
  <Switch>
    <Route path="/people/:personId" component={Character} />
    <Route path="/people" component={People} />
  </Switch>
</div>

export { routes };