import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/index';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {

    render() {
        return (
            <div>
                <form>
                    <div className="form-group has-feedback has-feedback-right">
                        <div>
                            <i className="glyphicon glyphicon-search fa-1x form-control-feedback"></i>
                            <input type="text" className="form-control" placeholder="Search a repository" onChange={(event) => this.props.search(event.target.value)}/>
                        </div>
                    </div>
                </form>
            </div>
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