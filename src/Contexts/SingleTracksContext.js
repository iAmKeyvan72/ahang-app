import React, { createContext } from 'react';

import useSingleTracksController from '../hooks/useSingleTracksController';

export const SingleTracksContext = createContext();

export const SingleTracksContextProvider = ({ children }) => {
  const { isLoading, singleTracksList, hasError, error } =
    useSingleTracksController();

  const provider = { isLoading, singleTracksList, hasError, error };

  return (
    <SingleTracksContext.Provider value={provider}>
      {children}
    </SingleTracksContext.Provider>
  );
};
