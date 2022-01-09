import React from 'react';

import Homepage from '../UI/Homepage/Homepage';
import Single from '../UI/Single/Single';
import Artist from '../UI/Artist/Artist';
import Search from '../UI/Search/Search';
import Archive from '../UI/Archive/Archive';

const App = ({ page, children }) => {
  switch (page) {
    case 'homepage':
      return <Homepage />;

    case 'single':
      return <Single />;

    case 'artist':
      return <Artist />;

    case 'search':
      return <Search />;

    case 'tracks':
      return <Archive type="tracks" />;

    default:
      return 0;
  }
};

export default App;
