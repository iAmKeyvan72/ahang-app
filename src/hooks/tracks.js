import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

export const useLatestTracks = () => {
  const initialLatestTracks = useContext(InitialHomepageDataContext);

  return useQuery('latestTracks', api.getLatestTracks, {
    initialData: initialLatestTracks,
  });
};

export const useSuggestionTracks = () => {
  const initialSuggestionTracks = useContext(InitialHomepageDataContext);

  return useQuery('suggestionTracks', api.getSuggestionTracks, {
    initialData: initialSuggestionTracks,
  });
};

export const useTrack = (id) => {
  return useQuery(['track', id], api.getTrack);
};
