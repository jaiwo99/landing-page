import React, { Component } from 'react';
import './Socials.css';

export default class Socials extends Component {
    render() {
        return (
            <p className='socials__container'>
                <span className='socials__item'>FB</span>
                <span className='socials__item'>g+</span>
                <span className='socials__item'>Twttr</span>
            </p>
        );
    }
}