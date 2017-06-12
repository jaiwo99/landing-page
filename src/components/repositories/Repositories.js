import React, { Component } from 'react';
import SearchBar from '../../containers/searchbar/searchbar';
import RepositoryList from '../../containers/repository-list/repository-list';

class Repositories extends Component {

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