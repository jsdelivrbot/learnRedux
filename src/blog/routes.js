/**
 * Created by chintan.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/"
           getComponent={(nextState, callback) => {
            require.ensure([], function(require) {
                callback(null, require('./components/app').default);
            });
           }}
    >
        <IndexRoute
            getComponent={(nextState, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./components/posts_index').default);
                });
            }}
    />
    </Route>
);