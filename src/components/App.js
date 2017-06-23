import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Header from './header/Header';
import Repositories from './repositories/Repositories';
import Footer from './footer/Footer';

class App extends Component {

  render() {
    return (
        <article className='app__container'>
            <Navbar />
            <Hero />
            <Header />
            <Repositories />
            <Footer />
        </article>
    );
  }
}

export default App;
