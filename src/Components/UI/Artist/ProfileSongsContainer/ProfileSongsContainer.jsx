import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';

import classes from './ProfileSongsContainer.module.css';
import TopSongsContainer from './TopSongsContainer/TopSongsContainer';

const ProfileSongsContainer = ({ artist, songs }) => {
  return (
    <div className={classes.profileSongsContainer}>
      <ProfileContainer artist={artist} />
      <TopSongsContainer songs={songs} />
    </div>
  );
};

export default ProfileSongsContainer;
