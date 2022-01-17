import { useQuery } from 'react-query';

import * as api from '../apis/api';

export const useSearch = (text) => {
  return useQuery(['search', text], api.search);
};
