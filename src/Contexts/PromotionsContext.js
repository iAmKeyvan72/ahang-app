import React, { createContext } from 'react';
import { usePromotions } from '../hooks/promotions';

export const PromotionsContext = createContext();
export const PromotionsContextProvider = ({ children }) => {
  const { data, isLoading } = usePromotions();

  console.log('[PromotionsContext] data: ', data);

  return (
    <PromotionsContext.Provider value={(data, isLoading)}>
      {children}
    </PromotionsContext.Provider>
  );
};
