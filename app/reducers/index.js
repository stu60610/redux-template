import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Auth from './Auth';

export default combineReducers({
  Auth,
  routing: routerReducer,
});
