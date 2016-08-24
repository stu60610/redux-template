import immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import {
  Types
} from '../actions/Auth';


export const INITIAL_STATE = immutable({
  account: null,
  errorCode: null,
  attempting: false,
});

// login attempts
const attempt = (state) =>
  state.merge({ attempting: true });

// successful logins
const success = (state, action) =>
  state.merge({ attempting: false, errorCode: null, account: action.account });

// login failure
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode });

// logout
const logout = (state) =>
  state.merge({ account: null });

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
