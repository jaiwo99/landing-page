import React, { Component } from 'react';
import { connect } from 'react-redux';
import Placeholder from './ironcat.png';
import './repository-list.css';

class RepositoryList extends Component {

    renderList() {
        return this.props.repositories.map(repo => {
            return (
                <div key={repo.title} className="col-xs-6 col-md-3">
                    <div class="thumbnail">
                        <img src={Placeholder} className="placeholder"/>
                        <div class="caption">
                            <h3>{repo.title}</h3>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        repositories: state.repositories
    }
}

export default connect(mapStateToProps)(RepositoryList);