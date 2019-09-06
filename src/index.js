import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import App from './App/App';
import store from './store/store';

const mapState = (state) => state;

const ConnectedApp = connect(mapState)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
