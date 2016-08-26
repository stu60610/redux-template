import React from 'react';
import { Link } from 'react-router';
import { Header, Button, Footer } from './Units/';


const IndexPage = () => (
  <div>
    <Link to="/welcome">welcome</Link>
    <Header />
    <Button />
    <Footer />
  </div>
);

export default IndexPage;
