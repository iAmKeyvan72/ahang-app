import React from 'react';

import {
  LatestTracksContextProvider,
  SuggestionTracksContextProvider,
} from '../../../Contexts/TracksContext';

import TopHomeBanner from './TopHomeBanner/TopHomeBanner';
import PlaylistsHorizontal from './PlaylistsHorizontal/PlaylistsHorizontal';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import ChooseArtists from './ChooseArtists/ChooseArtists';
import TopSongs from './TopSongs/TopSongs';
import FeaturedAlbumsHorizontal from './FeaturedAlbumsHorizontal/FeaturedAlbumsHorizontal';
import { PromotionsContextProvider } from '../../../Contexts/PromotionsContext';
import { SpecialPlaylistsContextProvider } from '../../../Contexts/PlaylistsContext';
import { SpecialAlbumsContextProvider } from '../../../Contexts/AlbumsContext';

const Homepage = () => {
  return (
    <>
      <PromotionsContextProvider>
        <TopHomeBanner />
      </PromotionsContextProvider>
      <SpecialPlaylistsContextProvider>
        <PlaylistsHorizontal />
      </SpecialPlaylistsContextProvider>
      <SuggestionTracksContextProvider>
        <FeaturedPosts />
      </SuggestionTracksContextProvider>
      <ChooseArtists />
      <LatestTracksContextProvider>
        <TopSongs />
      </LatestTracksContextProvider>
      <SpecialAlbumsContextProvider>
        <FeaturedAlbumsHorizontal />
      </SpecialAlbumsContextProvider>
    </>
  );
};

export default Homepage;
