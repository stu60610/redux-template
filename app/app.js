import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import {
  syncHistoryWithStore
} from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import settings from './config/EnvSettings';
import storeConfigure from './store/Store';

import DevTools from './containers/DevTools';
import IndexPage from './components/IndexPage';
import LandingPage from './components/LandingPage';


const store = storeConfigure();
const history = syncHistoryWithStore(browserHistory, store);
const App = (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/welcome">
          <IndexRoute component={LandingPage} />
        </Route>
        <Route path="/">
          <IndexRoute component={IndexPage} />
        </Route>
      </Router>
      {(settings.env === '__DEV__') ? <DevTools /> : null}
    </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
export default App;
