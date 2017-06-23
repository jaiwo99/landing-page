import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from '../../actions/index';
import {bindActionCreators} from 'redux';

import './Searchbar.css';
var SearchIcon = require('react-icons/lib/fa/search');

class SearchBar extends Component {

    render() {
        return (
            <form className="Searchbar__container">
                <div>
                    <SearchIcon className="Searchbar__icon"/>
                    <input type="text" className="Searchbar__inputtext" placeholder="Search a repository" onChange={(event) => this.props.search(event.target.value)}/>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search: search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);