import React, { createContext } from 'react';

import {
  useLatestTracks,
  useSuggestionTracks,
  useTrack,
} from '../hooks/tracks';

export const LatestTracksContext = createContext();
export const LatestTracksContextProvider = ({ children }) => {
  const { data, isLoading } = useLatestTracks();

  return (
    <LatestTracksContext.Provider value={(data, isLoading)}>
      {children}
    </LatestTracksContext.Provider>
  );
};

export const TrackContext = createContext();
export const TrackContextProvider = ({ id, children }) => {
  const { data, isLoading } = useTrack(id);

  return (
    <TrackContext.Provider value={(data, isLoading)}>
      {children}
    </TrackContext.Provider>
  );
};

export const SuggestionTracksContext = createContext();
export const SuggestionTracksContextProvider = ({ children }) => {
  const { data, isLoading } = useSuggestionTracks();

  return (
    <SuggestionTracksContext.Provider value={(data, isLoading)}>
      {children}
    </SuggestionTracksContext.Provider>
  );
};
