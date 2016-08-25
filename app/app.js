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
import storeConfigure from './store/Store';

import IndexPage from './components/IndexPage';
import LandingPage from './components/LandingPage';

const store = storeConfigure();
const history = syncHistoryWithStore(browserHistory, store);
const App = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/welcome">
        <IndexRoute component={LandingPage} />
      </Route>
      <Route path="/">
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
export default App;
