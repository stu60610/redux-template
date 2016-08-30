import React, { PropTypes as T, Component }  from 'react';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import { Header, Button, Footer } from './Units/';


class IndexPage extends Component {
  static propTypes = {
    t: T.func.isRequired
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <Link to="/welcome">{t('welcome')}</Link>
        <Header />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default translate()(IndexPage);
