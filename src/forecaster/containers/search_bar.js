/**
 * Created by chintan on 12/24/16.
 */
import React, {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {

        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input type="text"
                    placeholder="Enter name of the city"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    };
}