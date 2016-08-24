import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE
  LOGOUT
`);


const loginRequest = (account, password) => ({ type: Types.LOGIN_ATTEMPT, account, password });

const loginSuccess = (account) => ({ type: Types.LOGIN_SUCCESS, account });

const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode });

const logout = () => ({ type: Types.LOGOUT });

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
};
