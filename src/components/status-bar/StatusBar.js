import React, { Component } from 'react';
import logo from './axel_springer_logo.png';

class StatusBar extends Component {
    render() {
        return (
            <div>
                <img src={logo}/>
            </div>
        );
    }
}

export default StatusBar;