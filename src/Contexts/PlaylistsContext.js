import React, { createContext } from 'react';

import * as api from '../apis/api';
import {
  useLatestPlaylists,
  usePlaylist,
  useSpecialPlaylists,
} from '../hooks/playlists';

export const LatestPlaylistsContext = createContext();
export const LatestPlaylistsContextProvider = ({ children }) => {
  const { data, isLoading } = useLatestPlaylists();

  return (
    <LatestPlaylistsContext.Provider value={(data, isLoading)}>
      {children}
    </LatestPlaylistsContext.Provider>
  );
};

export const SpecialPlaylistsContext = createContext();
export const SpecialPlaylistsContextProvider = ({ children }) => {
  const { data, isLoading } = useSpecialPlaylists();

  return (
    <SpecialPlaylistsContextProvider value={(data, isLoading)}>
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
