import React, { Component } from 'react';
import './App.css';
import StatusBar from './status-bar/StatusBar';
import Header from './header/Header';
import Repositories from './repositories/Repositories';

class App extends Component {

    constructor() {
        super();
    }

  render() {
    return (
        <div className="container-fluid">
            <StatusBar />
            <Header />
            <Repositories />
        </div>
    );
  }
}

export default App;
