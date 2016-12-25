/**
 * Created by chintan on 12/23/16.
 */
import React, {Component} from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component{
    render(){
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>

        );
    }
}