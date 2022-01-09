import React, { useContext } from 'react';

import {
  SingleTracksContext,
  SingleTracksContextProvider,
} from '../../../Contexts/SingleTracksContext';

import classes from './Artist.module.css';

import ProfileSongsContainer from './ProfileSongsContainer/ProfileSongsContainer';

const Artist = () => {
  const { singleTracksList: songs } = useContext(SingleTracksContext);

  const artist = {
    faName: 'علی یاسینی',
    enName: 'Ali Yasini',
    image: '/images/temp/artists/Ali Yasini.jpg',
    totalSongs: 23,
    followed: false,
  };

  return (
    <>
      <ProfileSongsContainer artist={artist} songs={songs} />
    </>
  );
};

const ArtistWithoutContext = () => (
  <SingleTracksContextProvider>
    <Artist />
  </SingleTracksContextProvider>
);

export default ArtistWithoutContext;
