import React, { Component } from 'react';
import './Tile.css';

var FaPlayCircle = require('react-icons/lib/fa/play-circle');

export default class Tile extends Component {
    onClick() {
        window.open(this.props.repository.videoUrl, '_blank');
    }

    render() {
        return (
            <div className='tile__container'>
                <h3 className='tile__heading'>
                    <span>{this.props.repository.title}</span>
                    <img className='tile__logo' src={'../../logo_' + this.props.repository.publisher + '.png'} />
                </h3>
                <p className='tile__description'>{this.props.repository.description}</p>
                <button className='tile__videoButton' onClick={this.onClick.bind(this)}><FaPlayCircle /> Erklärvideo</button>
                <div className='tile__github'>GitHub Stat's</div>
            </div>
        );
    }
}