import React from 'react';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';

import { stringToSlug } from '../../../functions/stringToSlug';

const MusicPlayerContainer = ({ post }) => {
  const { artistsEnList, enName, coverImage } = post;

  const artistEnStr = artistsEnList.join(' & ');

  return (
    <div className={classes.musicPlayerContainer}>
      <div className={classes.contentsWrapper}>
        <div className={classes.coverContainer}>
          <DynamicShadowImage
            src={coverImage}
            alt={`${artistEnStr} - ${enName}`}
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
