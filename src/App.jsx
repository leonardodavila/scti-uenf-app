import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
