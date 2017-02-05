import React, { Component } from 'react';

class RepositoryList extends Component {

    constructor() {
        super();
    }

    renderList() {
        return this.props.repositories.map(repo => {
            return (
                <li key="repo.title" className="list-group-item">{repo.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

export default RepositoryList;