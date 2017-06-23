import React, { Component } from 'react';
import Searchbar from '../../containers/searchbar/Searchbar';
import RepositoryList from '../../containers/repository-list/repository-list';

import './Repositories.css';

class Repositories extends Component {

    render() {
        return (
            <section className='repositories_container'>
                <h2 className='repositories_heading'>Repositories</h2>
                <Searchbar />
                <RepositoryList />
            </section>
        );
    }
}

export default Repositories;