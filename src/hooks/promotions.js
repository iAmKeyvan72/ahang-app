import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

export const usePromotions = () => {
  const initialPromotions = useContext(InitialHomepageDataContext);

  console.log(initialPromotions);

  return useQuery('promotions', () => api.getPromotions(), {
    initialData: initialPromotions,
  });
};
