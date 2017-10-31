import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="nav">
          <a href="/html/" class="nav-item">HTML</a>
          <a href="/css/" class="nav-item">CSS</a>
        </nav>
        <header className="header">
          <figure className="header-banner">
          </figure>
        </header>
      </div>
    );
  }
}

export default App;
