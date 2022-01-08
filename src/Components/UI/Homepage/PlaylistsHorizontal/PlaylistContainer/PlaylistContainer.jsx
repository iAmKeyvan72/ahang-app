import React from 'react';

import classes from './PlaylistContainer.module.css';

import Anchor from '../../../Shared/Anchor/Anchor';
import Image from '../../../Shared/Image/Image';

const PlaylistContainer = ({ playlist }) => {
  return (
    <div className={classes.playlistContainer}>
      <Anchor href="#" title={`${playlist.title} Playlist`}>
        <Image
          src={playlist.image}
          alt={`${playlist.title} Playlist`}
          className="corneredImage"
          width={300}
          height={300}
        />
      </Anchor>
    </div>
  );
};

export default PlaylistContainer;
