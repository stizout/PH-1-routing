import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="#/">Home</a>
          <a href="#/about">About</a>
        </nav>
        This is App.js
        <MyRoute path="/" MyComponent={Home} />
        <MyRoute path="/about" MyComponent={About} />
      </div>
    );
  }
}

class MyRoute extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ url: event.newURL })
    })
  }

  render() {
    const MyComponent = this.props.MyComponent
    return this.state.url.endsWith(this.props.path) ? <MyComponent /> : null
  }
}

export default App;
