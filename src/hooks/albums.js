import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

export const useLatestAlbums = () => {
  return useQuery('latestAlbums', api.getLatestAlbums);
};

export const useSpecialAlbums = () => {
  const initialSpecialAlbums = useContext(InitialHomepageDataContext);

  return useQuery('SpecialAlbums', api.getSpecialAlbums, {
    initialData: initialSpecialAlbums,
  });
};

export const useAlbum = (id) => {
  return useQuery(['album', id], api.getAlbum);
};
