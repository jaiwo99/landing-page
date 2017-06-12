import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div>
                    <h2>We love open source</h2>
                </div>
                <div>
                    <div>Contributor: 100</div>
                    <div>Stars: 100</div>
                    <div>Repositories: 100</div>
                    <div>Languages: 100</div>
                </div>
            </div>
        );
    }
}

export default Header;