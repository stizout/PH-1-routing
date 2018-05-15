import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 Not found</h1>
        <p>The page you tried to visit, {this.props.location.pathname}, does not exist.</p>
        <Link to="/">Homepage</Link>
      </div>
    );
  }
}