import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  Provider,
} from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
