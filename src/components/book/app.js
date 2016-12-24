/**
 * Created by chintan on 12/23/16.
 */
import React, {Component} from 'react';

import BookList from '../../containers/book/book-list';

export default class App extends Component{
    render(){
        return (
            <div>
                <BookList/>
            </div>

        );
    }
}