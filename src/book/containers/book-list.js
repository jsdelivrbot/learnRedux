/**
 * Created by chintan on 12/23/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../../book/actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}


function mapStateToProps(state){
    // Whatever is returned from here will show as props in BookList
    return {
        books : state.books
    };
}

// Anything returned from this function will end up as Props on
// BookList container
function mapDispatchToProps(dispatch) {
    // When selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to be made aware about
// the new dispatch methof, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);