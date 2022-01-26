import React from 'react';

import classes from './PlaylistContainer.module.css';

import Anchor from '../../../Shared/Anchor/Anchor';
import Image from '../../../Shared/Image/Image';

const PlaylistContainer = ({ playlist }) => {
  const { enName, coverImage, slug } = playlist;

  return (
    <div className={classes.playlistContainer}>
      <Anchor href={slug} title={`${enName} Playlist`}>
        <Image
          src={coverImage}
          alt={`${enName} Playlist`}
          className="corneredImage"
          width={300}
          height={300}
        />
      </Anchor>
    </div>
  );
};

export default PlaylistContainer;
