import React, { Component } from 'react';

class SearchBar extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group has-feedback has-feedback-right">
                        <div>
                            <i className="glyphicon glyphicon-search fa-1x form-control-feedback"></i>
                            <input type="text" className="form-control" placeholder="Search a repository"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;