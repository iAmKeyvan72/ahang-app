import { createContext } from 'react';
import { useSearch } from '../hooks/search';

export const SearchContext = createContext();
export const SearchContextProvider = ({ text, children }) => {
  const { data, isLoading } = useSearch(text);

  return (
    <SearchContext.Provider value={(data, isLoading)}>
      {children}
    </SearchContext.Provider>
  );
};
