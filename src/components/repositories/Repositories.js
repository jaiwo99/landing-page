import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepositoryList from '../../containers/RepositoryList';

class Repositories extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h3>Repositories</h3>
                <SearchBar/>
                <RepositoryList />
            </div>
        );
    }
}

export default Repositories;