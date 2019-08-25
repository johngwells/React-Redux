import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

console.log('store', store);
console.log('store.getState()', store.getState());

store.subscribe(() => console.log('store.getState()', store.getState()));

// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(collapseInstructions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
