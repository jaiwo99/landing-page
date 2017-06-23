import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tile from '../../components/repositories/tile/Tile';

import './repository-list.css';

class RepositoryList extends Component {

    renderList() {
        return this.props.repositories.map(repo => {
            return (
                <Tile key={repo.title} repository={repo} />
            );
        });
    }

    render() {
        return (
            <div className='repository-list__container'>
            {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        repositories: state.searchRepository
    }
}

export default connect(mapStateToProps)(RepositoryList);