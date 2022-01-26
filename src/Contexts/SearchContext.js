import { createContext } from 'react';
import { useSearch } from '../hooks/useSearchContainer';

export const SearchContext = createContext();
export const SearchContextProvider = ({ query, children }) => {
  const { data, isLoading } = useSearch(query);

  return (
    <SearchContext.Provider value={(data, isLoading)}>
      {children}
    </SearchContext.Provider>
  );
};
