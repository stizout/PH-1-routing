import React from 'react';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <h3>FAQ</h3>
      <h3>Company</h3>
      {props.children}
    </div>
  )
}