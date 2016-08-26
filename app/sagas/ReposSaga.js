import { take, call, put } from 'redux-saga/effects';
import { Types, getRepoSuccess, getRepoFailure } from '../actions/Repo';

export default (api) => {
  function* worker(userName) {
    const response = yield call(api.getRepos, userName);
    if (response) {
      yield put(getRepoSuccess(response));
    } else {
      yield put(getRepoFailure(400));
    }
  }

  function* watcher() {
    while (true) {
      const { userName } = yield take(Types.GET_REPO_REQUEST);
      yield call(worker, userName);
    }
  }

  return {
    worker,
    watcher,
  };
};
