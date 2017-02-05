import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import RepositoryList from './repositoryList/RepositoryList';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Header />
            <RepositoryList />
        </div>
    );
  }
}

export default App;
