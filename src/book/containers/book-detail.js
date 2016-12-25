/**
 * Created by chintan on 12/23/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {
    render() {
        if(!this.props.book){
            return <h5>Select a book to see details</h5>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book? this.props.book.title: ""}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    };
}

function mapStateToProps(state){
    return {
        book: state.selectedBook
    };
};

export default connect(mapStateToProps)(BookDetails);