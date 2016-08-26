import { take } from 'redux-saga/effects';
import { Types as StartUpTypes } from '../actions/StartUp';

// process STARTUP actions
function* watchStartup() {
  yield take(StartUpTypes.STARTUP);
}


export {
  watchStartup,
};

export default null;
