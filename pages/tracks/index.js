import React, { createContext } from 'react';

import * as api from '../../src/apis/api';

import Layout from '../../src/Components/Layout/Layout';

export const InitialTracksPageDataContext = createContext();

export async function getStaticProps() {
  const initialLatestTracks = await api.getLatestTracks();

  return {
    revalidate: 10,
    props: {
      initialLatestTracks,
    },
  };
}

const Tracks = ({ initialLatestTracks }) => {
  return (
    <InitialTracksPageDataContext.Provider value={initialLatestTracks}>
      <Layout page="tracks" />
    </InitialTracksPageDataContext.Provider>
  );
};

export default Tracks;
