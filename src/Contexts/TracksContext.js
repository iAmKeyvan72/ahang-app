import React, { createContext } from 'react';

import {
  useLatestTracks,
  useNextTracks,
  useSuggestionTracks,
  useTrack,
} from '../hooks/useTracksContainer';

export const LatestTracksContext = createContext();
export const LatestTracksContextProvider = ({ children }) => {
  const { data, isLoading } = useLatestTracks();

  return (
    <LatestTracksContext.Provider value={(data, isLoading)}>
      {children}
    </LatestTracksContext.Provider>
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

export const TrackContext = createContext();
export const TrackContextProvider = ({ id, children }) => {
  const { renderedData, isLoading } = useTrack(id);

  return (
    <TrackContext.Provider value={{ renderedData, isLoading }}>
      {children}
    </TrackContext.Provider>
  );
};

export const NextTracksContext = createContext();
export const NextTracksContextProvider = ({ id, children }) => {
  const { data, isLoading } = useNextTracks(id);

  return (
    <NextTracksContext.Provider value={(data, isLoading)}>
      {children}
    </NextTracksContext.Provider>
  );
};
