import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Character from './components/Character/Character';

const NotFound = () => <div><h1>Page not found 404</h1></div>

const routes = <div>
  <nav>
    <NavLink exact activeClassName="big-bold" to="/">Home</NavLink>
    <NavLink exact activeClassName="big-bold" to="/about">About</NavLink>
    <NavLink exact activeClassName="big-bold" to="/people">People</NavLink>
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