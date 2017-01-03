/**
 * Created by chintan on 12/30/16.
 */
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>{this.props.children}</div>

        );
    }
}