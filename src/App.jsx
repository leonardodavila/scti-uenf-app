import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <img src="/images/logo.png" alt="SCTI UENF" className="nav-logo"/>
          <input type="checkbox" id="nav-menu_toggle" />
          <label for="nav-menu_toggle" className="nav-menuButton">
          </label>
          <div className="nav-menu">
            <a href="/html/" className="nav-link">HTML</a>
            <a href="/css/" className="nav-link">CSS</a>
          </div>
        </nav>
        <header className="header">
          <div className="header-title">
            <h1>7ª Semana de Ciência da Computação e Tecnologia da Informação.</h1>
            <h3> De 6 a 10 de novembro no centro de convenções da UENF.</h3>
            <h2>Como ser um bom profissional na área de TI?</h2>
            <a className="header-button"> Inscreva-se </a>
          </div>
          <figure className="header-banner">
          </figure>
        </header>
         <div className="topics">
          <div className="card">
            <div className="card-keynoteInfo">
              <figure className="card-speakerThumb">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
              <div className="card-keynoteTitle">
                <p className="card-title">John Smith</p>
                <p className="card-speaker">@johnsmith</p>
              </div>
            </div>

            <div className="card-keynotePreview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <div className="card">
            <div className="card-keynoteInfo">
              <figure className="card-speakerThumb">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
              <div className="card-keynoteTitle">
                <p className="card-title">John Smith</p>
                <p className="card-speaker">@johnsmith</p>
              </div>
            </div>

            <div className="card-keynotePreview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <div className="card">
            <div className="card-keynoteInfo">
              <figure className="card-speakerThumb">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
              <div className="card-keynoteTitle">
                <p className="card-title">John Smith</p>
                <p className="card-speaker">@johnsmith</p>
              </div>
            </div>

            <div className="card-keynotePreview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
         </div>
         <footer className="footer">
          <div className="footer-item">
             <h4> Sobre o evento </h4>
             <p> A Semana de Ciência da Computação e Tecnologia da Informação (SCTI) é um dos eventos que compõe a Semana Acadêmica Unificada da UENF que todo ano reúne os alunos de graduação para participar de palestras, feiras, apresentações culturais, minicursos entre diversas outras atividades.</p>
          </div>
          <div className="footer-item">
            <h4> Endereço </h4>
            <p> Universidade Estadual do Norte Fluminense Darcy Ribeiro, Av. Alberto Lamego, 2000 - Parque Califórnia, Campos dos Goytacazes - RJ, CEP: 28013-602</p>
          </div>
          <div className="footer-item">
            <h4> Contato </h4>
            <p> Conteudo Conteudo Conteudo</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
