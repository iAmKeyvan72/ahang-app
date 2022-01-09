import React from 'react';

import { SingleTracksContextProvider } from '../../../Contexts/SingleTracksContext';

import TopHomeBanner from './TopHomeBanner/TopHomeBanner';
import PlaylistsHorizontal from './PlaylistsHorizontal/PlaylistsHorizontal';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import ChooseArtists from './ChooseArtists/ChooseArtists';
import TopSongs from './TopSongs/TopSongs';
import FeaturedAlbumsHorizontal from './FeaturedAlbumsHorizontal/FeaturedAlbumsHorizontal';

const Homepage = () => {
  return (
    <>
      <SingleTracksContextProvider>
        <TopHomeBanner />
      </SingleTracksContextProvider>
      <PlaylistsHorizontal />
      <SingleTracksContextProvider>
        <FeaturedPosts />
      </SingleTracksContextProvider>
      <ChooseArtists />
      <SingleTracksContextProvider>
        <TopSongs />
      </SingleTracksContextProvider>
      <FeaturedAlbumsHorizontal />
    </>
  );
};

export default Homepage;
