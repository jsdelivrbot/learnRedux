/**
 * Created by chintan.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, useRouterHistory} from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';
import { createHistory } from 'history'

const history = useRouterHistory(createHistory)({
    basename: '/src/blog/'
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history} routes={routes}/>
    </Provider>
    , document.querySelector('.container'));