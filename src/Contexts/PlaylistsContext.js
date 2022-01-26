import React, { createContext } from 'react';

import * as api from '../apis/api';
import {
  useLatestPlaylists,
  usePlaylist,
  useSpecialPlaylists,
} from '../hooks/usePlaylistsContainer';

export const LatestPlaylistsContext = createContext();
export const LatestPlaylistsContextProvider = ({ children }) => {
  const { data, isLoading } = useLatestPlaylists();

  const provider = { data, isLoading };

  return (
    <LatestPlaylistsContext.Provider value={provider}>
      {children}
    </LatestPlaylistsContext.Provider>
  );
};

export const SpecialPlaylistsContext = createContext();
export const SpecialPlaylistsContextProvider = ({ children }) => {
  const { data, isLoading } = useSpecialPlaylists();

  console.log('[SpecialPlaylistsContext] data: ', data);
  console.log('================================');

  return (
    <SpecialPlaylistsContextProvider value={{ data, isLoading }}>
      {children}
    </SpecialPlaylistsContextProvider>
  );
};

export const PlaylistContext = createContext();
export const PlaylistContextProvider = ({ id, children }) => {
  const { data, isLoading } = usePlaylist(id);

  return (
    <PlaylistContext.Provider value={(data, isLoading)}>
      {children}
    </PlaylistContext.Provider>
  );
};
