import React from 'react';

import TopHomeBanner from './TopHomeBanner/TopHomeBanner';
import PlaylistsHorizontal from './PlaylistsHorizontal/PlaylistsHorizontal';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import ChooseArtists from './ChooseArtists/ChooseArtists';
import TopSongs from './TopSongs/TopSongs';
import FeaturedAlbumsHorizontal from './FeaturedAlbumsHorizontal/FeaturedAlbumsHorizontal';

const Homepage = (props) => {
  return (
    <>
      <TopHomeBanner />
      <PlaylistsHorizontal />
      <FeaturedPosts />
      <ChooseArtists />
      <TopSongs />
      <FeaturedAlbumsHorizontal />
    </>
  );
};

export default Homepage;
