import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/content">Home</Link></li>
        </ul>
      </nav>
    );
  }
}