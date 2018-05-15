import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </nav>
        <main>
          {routes}
        </main>
      </div>
    );
  }
}

export default App;
