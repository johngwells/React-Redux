import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from './actions/settings';
import './App.css';

class App extends Component {
  render() {
    console.log('this', this);

    return (
      <div>
        <h2>Guess Game</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <br />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.props.startGame}>Start Game</button>
            </div>
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame())
  };
}

const mapStateToProps = state => {
  console.log('state', state);

  return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
