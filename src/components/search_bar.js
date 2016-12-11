/**
 * Created by chintan on 12/7/16.
 */
import React, { Component } from "react";

/*
* Class based component used when  it needs the save State
* This is also controlled component because we are using state to set value and
* change state based on user input for the same component
*/
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'start'};
    }

    render() {
        return (
            <div>
                <input
                    onChange={event => {this.onInputChange(event)}}
                    onKeyPress={event => {this.onKeyPressed(event)}}
                    value = {this.state.term}
                />
                Value of Term: {this.state.term}
            </div>
        );
    }

    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({term: event.target.value});

    }

    onKeyPressed(event) {
        if(event.charCode == 13){
            this.props.onSearchTerm(this.state.term);
        }
    }
}
export default SearchBar;
