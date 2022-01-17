import { useQuery } from 'react-query';

import * as api from '../apis/api';

export const useArtists = () => {
  return useQuery('artists', api.getArtists);
};

export const useArtist = (id) => {
  return useQuery(['artist', id], api.getArtist);
};
