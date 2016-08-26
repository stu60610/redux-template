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
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/';
import settings from '../config/EnvSettings';
import DevTools from '../containers/DevTools';
import originReducer from '../reducers/';


const middlewares = [
  routerMiddleware(browserHistory),
];
let enhancers;
const logger = createLogger(settings.reduxLogConfig);

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);


if (settings.env === '__DEV__') {
  middlewares.push(logger);
  enhancers = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  );
} else {
  enhancers = compose(
    applyMiddleware(...middlewares),
  );
}

export default () => {
  let store = {};

  store = createStore(
    originReducer,
    enhancers,
  );

  sagaMiddleware.run(sagas);

  return store;
};
