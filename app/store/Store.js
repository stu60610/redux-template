import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createLogger from 'redux-logger';
import originReducer from '../reducers/';


const logger = createLogger();
const middlewares = [];

if (ENV === '__DEV__') {
  middlewares.push(logger)
};

export default () => {
  
};
