import React from 'react';

import TopHomeBanner from '../UI/TopHomeBanner/TopHomeBanner';
import Header from '../Header/Header';
import PlaylistsHorizontal from '../UI/PlaylistsHorizontal/PlaylistsHorizontal';
import FeaturedPosts from '../UI/FeaturedPosts/FeaturedPosts';
import ChooseArtists from '../UI/ChooseArtists/ChooseArtists';
import TopSongs from '../UI/TopSongs/TopSongs';
import FeaturedAlbumsHorizontal from '../UI/FeaturedAlbumsHorizontal/FeaturedAlbumsHorizontal';

const App = (props) => {
  return (
    <>
      <Header />
      <TopHomeBanner />
      <PlaylistsHorizontal />
      <FeaturedPosts />
      <ChooseArtists />
      <TopSongs />
      <FeaturedAlbumsHorizontal />
    </>
  );
};

export default App;
