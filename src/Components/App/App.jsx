import React from 'react';

import Homepage from '../UI/Homepage/Homepage';
import Single from '../UI/Single/Single';
import Artist from '../UI/Artist/Artist';

const App = ({ page, data, children }) => {
  switch (page) {
    case 'homepage':
      return <Homepage singles={data} />;

    case 'single':
      return <Single />;

    case 'artist':
      return <Artist />;

    default:
      return 0;
  }
};

export default App;
