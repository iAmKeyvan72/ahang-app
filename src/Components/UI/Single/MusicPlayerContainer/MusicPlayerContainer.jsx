import React from 'react';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';
import TotalPlayer from '../../Shared/TotalPlayer/TotalPlayer';

const MusicPlayerContainer = ({ post: currPost, nextUps }) => {
  const { artistsEnList, enName, coverImage } = currPost;

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

        <SongInfoDlFav post={currPost} />

        <TotalPlayer currPost={currPost} nextUps={nextUps} />

        <SongActionBox post={currPost} />
      </div>
    </div>
  );
};

export default MusicPlayerContainer;
