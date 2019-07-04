import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import carsReducer from './store/reducers/index';

const store = createStore(carsReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);