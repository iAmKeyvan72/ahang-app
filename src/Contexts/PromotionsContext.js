import React, { createContext } from 'react';
import { usePromotions } from '../hooks/usePromotionsContainer';

export const PromotionsContext = createContext();
export const PromotionsContextProvider = ({ children }) => {
  const { renderedData, isLoading } = usePromotions();

  return (
    <PromotionsContext.Provider value={{ renderedData, isLoading }}>
      {children}
    </PromotionsContext.Provider>
  );
};
