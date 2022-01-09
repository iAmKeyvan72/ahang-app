import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import App from '../App/App';

const Layout = ({ page, data }) => {
  return (
    <>
      <Header />
      <App page={page} />
      <Footer />
    </>
  );
};

export default Layout;
