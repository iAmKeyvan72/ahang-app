import { useQuery } from 'react-query';

import * as api from '../apis/api';

export const useSearch = (query) => {
  return useQuery(['search', query], api.search);
};
