import { createContext } from 'react';

import { useArtist, useArtists } from '../hooks/artists';

export const ArtistsContext = createContext();
export const ArtistsContextProvider = ({ children }) => {
  const { data, isLoading } = useArtists();

  return (
    <ArtistsContext.Provider value={(data, isLoading)}>
      {children}
    </ArtistsContext.Provider>
  );
};

export const ArtistContext = createContext();
export const ArtistContextProvider = ({ children }) => {
  const { data, isLoading } = useArtist();

  return (
    <ArtistContext.Provider value={(data, isLoading)}>
      {children}
    </ArtistContext.Provider>
  );
};
