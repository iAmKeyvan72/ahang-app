import { createContext } from 'react';

import {
  useArtist,
  useArtists,
  useArtistTracks,
} from '../hooks/useArtistsContainer';

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
export const ArtistContextProvider = ({ id, children }) => {
  const { data, isLoading } = useArtist(id);

  return (
    <ArtistContext.Provider value={(data, isLoading)}>
      {children}
    </ArtistContext.Provider>
  );
};

export const ArtistTracksContext = createContext();
export const ArtistTracksContextProvider = ({ id, children }) => {
  const { data, isLoading } = useArtistTracks(id);

  return (
    <ArtistTracksContext.Provider value={(data, isLoading)}>
      {children}
    </ArtistTracksContext.Provider>
  );
};
