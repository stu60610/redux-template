import React, { PropTypes as T, Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import settings from './config/EnvSettings';
import DevTools from './containers/DevTools';
import IndexPage from './components/IndexPage';
import LandingPage from './components/LandingPage';
import StartUpActions from './actions/StartUp';

export default class App extends Component {
  static propTypes = {
    store: T.object.isRequired
  }

  componentWillMount() {
    const { dispatch } = this.props.store;
    dispatch(StartUpActions.startup());
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={syncHistoryWithStore(browserHistory, this.props.store)}>
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
  }
}
