import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import {
    getTitle,
    getTodo,
    getIdCount,
    getCompletedCount,
    getFilterList,
    getInput,
    getActiveFilter
} from './actions/index';

// Create store to hold our state and use redux thunk to delay the dispatch of an action
const store = createStore(allReducers, applyMiddleware(thunk));

// Get states into the store from API server
store.dispatch(getTitle());
store.dispatch(getTodo());
store.dispatch(getIdCount());
store.dispatch(getCompletedCount());
store.dispatch(getFilterList());
store.dispatch(getInput());
store.dispatch(getActiveFilter());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));