import React from 'react';
import ReactDOM from 'react-dom';
import storeConfigure from './store/Store';
import App from './app';

ReactDOM.render(<App store={storeConfigure()} />, document.getElementById('root'));
