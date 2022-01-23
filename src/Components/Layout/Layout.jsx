import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import App from '../App/App';

const Layout = ({ page, data }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <App page={page} />
      <Footer />
    </QueryClientProvider>
  );
};

export default Layout;
