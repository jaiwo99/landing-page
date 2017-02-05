import React, { Component } from 'react';
import './App.css';
import StatusBar from './status-bar/StatusBar';
import Header from './header/Header';
import RepositoryList from './repositoryList/RepositoryList';

class App extends Component {
  render() {
    return (
        <div>
            <StatusBar />
            <Header />
            <RepositoryList />
        </div>
    );
  }
}

export default App;
