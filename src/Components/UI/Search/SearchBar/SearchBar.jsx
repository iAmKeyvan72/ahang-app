import React, { useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import classes from './SearchBar.module.css';

const SearchBar = ({ query, setQuery }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={classes.searchBarContainer}>
      <Icon path={mdiMagnify} size={1.2} color="var(--text-400)" />

      <input
        ref={inputRef}
        placeholder="Search for artist, song, lyrics"
        type="search"
        className={classes.searchBarInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
