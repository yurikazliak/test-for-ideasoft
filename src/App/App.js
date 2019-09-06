import React, { Component } from 'react';
import './App.css';
import logo from '../logo.svg';

import { fetchArr } from '../store/actions';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <button className='Button'
        onClick={() => this.props.dispatch(fetchArr())}
          >Click on me!
            </button>
        {this.props.loading
          ? <img src={logo} className="App-logo" alt="logo" />
          : this.props.error
            ? <p className='Load-error'>Error, something went wrong</p>
            : <p className='Load-success'>{`${this.props.array.join(' ')}.`}</p>}
      </div>
    )
  }
}

export default App;
