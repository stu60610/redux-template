import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  browserHistory,
} from 'react-router';
import {
  routerMiddleware,
} from 'react-router-redux';
import createLogger from 'redux-logger';
import settings from '../config/EnvSettings';
import originReducer from '../reducers/';

import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/';


const logger = createLogger(settings.reduxLogConfig);
const middlewares = [
  routerMiddleware(browserHistory),
];

// const sagaMiddleware = createSagaMiddleware();

if (settings.env === '__DEV__') {
  middlewares.push(logger);
}

export default () => {
  let store = {};
  const enhancers = compose(
    applyMiddleware(...middlewares),
  );

  store = createStore(
    originReducer,
    enhancers
  );

  // sagaMiddleware.run(sagas);

  return store;
};
