import React from 'react';

import Homepage from '../UI/Homepage/Homepage';
import Single from '../UI/Single/Single';

const App = ({ page, children }) => {
  switch (page) {
    case 'homepage':
      return <Homepage />;

    case 'single':
      return <Single />;

    default:
      return 0;
  }
};

export default App;
