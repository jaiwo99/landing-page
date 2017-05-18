import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepositoryList extends Component {

    renderList() {
        return this.props.repositories.map(repo => {
            return (
                <li key={repo.title} className="list-group-item">{repo.title}</li>
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

function mapStateToProps(state) {
    return {
        repositories: state.repositories
    }
}

export default connect(mapStateToProps)(RepositoryList);