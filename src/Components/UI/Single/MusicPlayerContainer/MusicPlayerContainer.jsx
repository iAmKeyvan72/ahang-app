import React from 'react';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';

import { stringToSlug } from '../../../functions/stringToSlug';

const MusicPlayerContainer = ({ post }) => {
  let artistsEnList = [];
  for (const artist of post.artists) {
    artistsEnList.push(artist.enName);
  }
  const artistEnStr = artistsEnList.join(' & ');

  return (
    <div className={classes.musicPlayerContainer}>
      <div className={classes.contentsWrapper}>
        <div className={classes.coverContainer}>
          <DynamicShadowImage
            src={post.coverImage}
            alt={`${artistEnStr} - ${post.enName}`}
            width={400}
            height={400}
            layout="responsive"
          />
        </div>

        <SongInfoDlFav post={post} />

        <div className="playerController">Here is controller</div>
        <SongActionBox post={post} />
      </div>
    </div>
  );
};

export default MusicPlayerContainer;
