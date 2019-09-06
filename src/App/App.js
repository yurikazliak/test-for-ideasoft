import React from 'react';
import './App.css';
import logo from '../logo.svg';

import { fetchArr } from '../store/actions';

const App = (props) => {
  const { array, loading, error, dispatch } = props;
  return (
    <div className='App'>
      <button className='Button'
        onClick={() => dispatch(fetchArr())}
      >Click on me!
            </button>
      {loading
        ? <img src={logo} className="App-logo" alt="logo" />
        : error
          ? <p className='Load-error'>Error, something went wrong</p>
          : <p className='Load-success'>{array.join(' ')}</p>}
    </div>
  )
}

export default App;
