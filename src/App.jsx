import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="nav">
          <img src="/images/logo.png" alt="SCTI UENF" class="nav-logo nav-item"/>
          <div class="nav-item nav-menu">
            <a href="/html/" class="nav-link">HTML</a>
            <a href="/css/" class="nav-link">CSS</a>
          </div>
        </nav>
        <header className="header">
          <div class="header-title">
            <h1>7ª Semana de Ciência da Computação e Tecnologia da Informação.</h1>
            <h3> De 6 a 10 de novembro no centro de convenções da UENF.</h3>
            <h2>Como ser um bom profissional na área de TI?</h2>
            <button> Inscreva-se </button>
          </div>
          <figure className="header-banner">
          </figure>
        </header>
         <div className="topics">
          <div className="topic">ONE</div>
          <div className="topic">TWO</div>
          <div className="topic">THREE</div>
          <div className="topic">FOUR</div>
         </div>
      </div>
    );
  }
}

export default App;
