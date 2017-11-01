import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="nav">
          <img src="/images/logo.png" class="nav-logo"/>
          <div>
            <a href="/html/" class="nav-item">HTML</a>
            <a href="/css/" class="nav-item">CSS</a>
          </div>
        </nav>
        <header className="header">
          <h2 class="header-title">7ª Semana de Ciência da Computação e Tecnologia da Informação 6 a 10 de novembro no Centro de Convenções da UENF.
               Como ser um bom profissional na área de TI? </h2>
          <figure className="header-banner">
          </figure>
        </header>
      </div>
    );
  }
}

export default App;
