import React from 'react';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';

import { stringToSlug } from '../../../functions/stringToSlug';

const MusicPlayerContainer = (props) => {
  return (
    <div className={classes.musicPlayerContainer}>
      <div className={classes.contentsWrapper}>
        <div className={classes.coverContainer}>
          <DynamicShadowImage
            src="/images/temp/singles/Ali Yasini - Cheraghooni.jpg"
            alt="Ali Yasini - Cheraghooni"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>

        <SongInfoDlFav />

        <div className="playerController">Here is controller</div>
        <SongActionBox />
      </div>
    </div>
  );
};

export default MusicPlayerContainer;
