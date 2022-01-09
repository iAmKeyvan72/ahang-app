import React from 'react';

import { SingleTracksContextProvider } from '../../../Contexts/SingleTracksContext';

import TopHomeBanner from './TopHomeBanner/TopHomeBanner';
import PlaylistsHorizontal from './PlaylistsHorizontal/PlaylistsHorizontal';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import ChooseArtists from './ChooseArtists/ChooseArtists';
import TopSongs from './TopSongs/TopSongs';
import FeaturedAlbumsHorizontal from './FeaturedAlbumsHorizontal/FeaturedAlbumsHorizontal';

const Homepage = (props) => {
  return (
    <>
      <SingleTracksContextProvider>
        <TopHomeBanner posts={props.singles} />
      </SingleTracksContextProvider>
      <PlaylistsHorizontal />
      <FeaturedPosts posts={props.singles} />
      <ChooseArtists />
      <TopSongs posts={props.singles} />
      <FeaturedAlbumsHorizontal />
    </>
  );
};

export default Homepage;
