import React from 'react';
import Head from 'next/head';

import Navbar from '../UI/Navbar/Navbar';

const Header = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
    </>
  );
};

export default Header;
