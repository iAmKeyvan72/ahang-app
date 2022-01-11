import React, { useState } from 'react';

import classes from './Search.module.css';

import { SingleTracksContextProvider } from '../../../Contexts/SingleTracksContext';
import SearchResults from './SearchResults/SearchResults';
import SearchBar from './SearchBar/SearchBar';

const Search = () => {
  const [query, setQuery] = useState(null);

  return (
    <SingleTracksContextProvider>
      <div className={classes.container}>
        <SearchBar query={query} setQuery={setQuery} />
        <SearchResults query={query} />
      </div>
    </SingleTracksContextProvider>
  );
};

export default Search;
