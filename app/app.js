import React, { PropTypes as T, Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/';
import settings from './config/EnvSettings';
import DevTools from './containers/DevTools';
import IndexPage from './components/IndexPage';
import LandingPage from './components/LandingPage';

import { startup } from './actions/StartUp';
import { getRepoRequest } from './actions/Repo';

export default class App extends Component {
  static propTypes = {
    store: T.object.isRequired
  }

  componentWillMount() {
    const { dispatch } = this.props.store;
    dispatch(startup());
    dispatch(getRepoRequest('wjwang'));
    // 可使用 changeLanguage 強制轉換語系
    i18n.changeLanguage('en');
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </Provider>
    );
  }
}
