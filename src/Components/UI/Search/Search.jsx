import React, { useState } from 'react';

import classes from './Search.module.css';

import SearchResults from './SearchResults/SearchResults';
import SearchBar from './SearchBar/SearchBar';
import { SearchContextProvider } from '../../../Contexts/SearchContext';

const Search = () => {
  const [query, setQuery] = useState(null);

  return (
    <div className={classes.container}>
      <SearchBar query={query} setQuery={setQuery} />
      <SearchContextProvider query={query}>
        <SearchResults />
      </SearchContextProvider>
    </div>
  );
};

export default Search;
