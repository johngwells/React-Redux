import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED'

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);
  
  switch(action.type) {
    case SET_GAME_STARTED:
      return { ...state, instructionsExpanded: state.instructionsExpanded };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpanded: action.instructionsExpanded };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

console.log('store', store);

store.subscribe(() => console.log('store.getState()', store.getState()));

const startGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: true
  };
}

const cancelGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: false
  };
}

const expandInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true };
}

const cancelInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false };
}

store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(cancelInstructions());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
