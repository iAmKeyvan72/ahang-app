import React, { useContext } from 'react';
import { mdiChevronLeft } from '@mdi/js';
import { useRouter } from 'next/router';

import {
  SingleTracksContext,
  SingleTracksContextProvider,
} from '../../../Contexts/SingleTracksContext';

import classes from './Artist.module.css';

import IconButton from '../Shared/Button/IconButton/IconButton';
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

  const router = useRouter();

  return (
    <>
      <IconButton
        icon={mdiChevronLeft}
        size={1.5}
        onClick={() => router.back()}
        style={{ marginTop: 20, marginLeft: 10 }}
      />
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
