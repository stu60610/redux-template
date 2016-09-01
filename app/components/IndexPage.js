import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import { Header, Button, Footer } from './Units/';

const IndexPage = (props) => {
  const { t } = props;
  return (
    <div>
      <Link to="/welcome">{t('welcome')}</Link>
      <Header />
      <Button />
      <Footer />
    </div>
  );
};

IndexPage.propTypes = {
  t: T.func.isRequired
};


export default translate()(IndexPage);
