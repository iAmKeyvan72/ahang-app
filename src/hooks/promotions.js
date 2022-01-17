import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

export const usePromotions = (props) => {
  const initialPromotions = useContext(InitialHomepageDataContext);

  return useQuery('promotions', api.getPromotions, {
    initialData: initialPromotions,
  });
};
