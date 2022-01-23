import React from 'react';
import { useRouter } from 'next/router';

import {
  ArtistContextProvider,
  ArtistTracksContextProvider,
} from '../../../../Contexts/ArtistsContext';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import TopSongsContainer from './TopSongsContainer/TopSongsContainer';

import classes from './ProfileSongsContainer.module.css';

const ProfileSongsContainer = () => {
  const router = useRouter();
  const { artistId } = router.query;

  return (
    <div className={classes.profileSongsContainer}>
      <ArtistContextProvider id={artistId}>
        <ProfileContainer />
      </ArtistContextProvider>
      <ArtistTracksContextProvider id={artistId}>
        <TopSongsContainer />
      </ArtistTracksContextProvider>
    </div>
  );
};

export default ProfileSongsContainer;
