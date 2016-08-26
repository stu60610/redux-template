import { take, put, call } from 'redux-saga/effects';
import * as AuthActions from '../actions/Auth';

export function* attempLogin(account, password) {
  if (password === '') {
    yield put(AuthActions.loginFailure(400));
  } else {
    yield put(AuthActions.loginSuccess('王韋仁'));
  }
}

export function* watchLoginAttempt() {
  while (true) {
    const { account, password } = yield take(AuthActions.Types.LOGIN_ATTEMPT);
    yield call(attempLogin, account, password);
  }
}
