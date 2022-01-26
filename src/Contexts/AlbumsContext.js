import { createContext } from 'react';
import { useAlbum, useLatestAlbums } from '../hooks/useAlbumsContainer';

export const LatestAlbumsContext = createContext();
export const LatestAlbumsContextProvider = ({ children }) => {
  const { data, isLoading } = useLatestAlbums();

  return (
    <LatestAlbumsContext.Provider value={(data, isLoading)}>
      {children}
    </LatestAlbumsContext.Provider>
  );
};

export const SpecialAlbumsContext = createContext();
export const SpecialAlbumsContextProvider = ({ children }) => {
  const { data, isLoading } = useSpecialAlbums();

  return (
    <SpecialAlbumsContext.Provider value={(data, isLoading)}>
      {children}
    </SpecialAlbumsContext.Provider>
  );
};

export const AlbumContext = createContext();
export const AlbumContextProvider = ({ id, children }) => {
  const { data, isLoading } = useAlbum(id);

  return (
    <AlbumContext.Provider value={(data, isLoading)}>
      {children}
    </AlbumContext.Provider>
  );
};
