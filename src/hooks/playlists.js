import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

export const useLatestPlaylists = () => {
  return useQuery('latestPlaylists', api.getLatestPlaylists);
};

export const useSpecialPlaylists = () => {
  const initialSpecialPlaylists = useContext(InitialHomepageDataContext);

  return useQuery('specialPlaylists', api.getSpecialPlaylists, {
    initialData: initialSpecialPlaylists,
  });
};

export const usePlaylist = (id) => {
  return useQuery(['playlist', id], api.getPlaylist);
};
