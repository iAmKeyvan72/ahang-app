import React, { createContext } from 'react';

import * as api from '../src/apis/api';

import Layout from '../src/Components/Layout/Layout';

export const InitialHomepageDataContext = createContext();

export async function getStaticProps() {
  const initialPromotions = await api.getPromotions();
  console.log('[getStaticProps] initialPromotions: ', initialPromotions);
  const initialSpecialPlaylists = await api.getSpecialPlaylists();
  console.log(
    '[getStaticProps] initialSpecialPlaylists: ',
    initialSpecialPlaylists
  );
  const initialSuggestionTracks = await api.getSuggestionTracks();
  console.log(
    '[getStaticProps] initialSuggestionTracks: ',
    initialSuggestionTracks
  );
  const initialLatestTracks = await api.getLatestTracks();
  console.log('[getStaticProps] initialLatestTracks: ', initialLatestTracks);
  const initialSpecialAlbums = await api.getSpecialAlbums();
  console.log('[getStaticProps] initialSpecialAlbums: ', initialSpecialAlbums);

  return {
    revalidate: 10,
    props: {
      initialPromotions,
      initialSpecialPlaylists,
      initialSuggestionTracks,
      initialLatestTracks,
      initialSpecialAlbums,
    },
  };
}

const Homepage = ({
  initialPromotions,
  initialSpecialPlaylists,
  initialSuggestionTracks,
  initialLatestTracks,
  initialSpecialAlbums,
}) => {
  return (
    <InitialHomepageDataContext.Provider
      value={
        (initialPromotions,
        initialSpecialPlaylists,
        initialSuggestionTracks,
        initialLatestTracks,
        initialSpecialAlbums)
      }
    >
      <Layout page="homepage" />
    </InitialHomepageDataContext.Provider>
  );
};

export default Homepage;
