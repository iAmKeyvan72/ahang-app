import React, { createContext } from 'react';

import * as api from '../src/apis/api';

import Layout from '../src/Components/Layout/Layout';

export const InitialHomepageDataContext = createContext();

export const getStaticProps = async () => {
  const initialPromotions = await api.getPromotions();
  const initialSpecialPlaylists = await api.getSpecialPlaylists();
  const initialSuggestionTracks = await api.getSuggestionTracks();
  const initialLatestTracks = await api.getLatestTracks();
  // const initialSpecialAlbums = await api.getSpecialAlbums();

  return {
    revalidate: 10,
    props: {
      initialPromotions,
      initialSpecialPlaylists,
      initialSuggestionTracks,
      initialLatestTracks,
      // initialSpecialAlbums,
    },
  };
};

const Homepage = ({
  initialPromotions,
  initialSpecialPlaylists,
  initialSuggestionTracks,
  initialLatestTracks,
  // initialSpecialAlbums,
}) => {
  return (
    <InitialHomepageDataContext.Provider
      value={
        {
          initialPromotions,
          initialSpecialPlaylists,
          initialSuggestionTracks,
          initialLatestTracks,
        }
        // initialSpecialAlbums
      }
    >
      <Layout page="homepage" />
    </InitialHomepageDataContext.Provider>
  );
};

export default Homepage;
