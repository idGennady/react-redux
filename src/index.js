import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import App from './components/App';
import reducer from './reducers/index';

let store = createStore(reducer);

// console.log(store.getState());

store.subscribe(()=>{
    console.log('store has be changed!');
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);