import React from 'react';

import classes from './SongInfoDlFav.module.css';

import LikeButton from '../../../Shared/Button/LikeButton/LikeButton';
import DownloadButton from '../../../Shared/Button/DownloadButton/DownloadButton';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';
import Anchor from '../../../Shared/Anchor/Anchor';

const SongInfoDlFav = (props) => {
  return (
    <div className={classes.songInfoDlFav}>
      <DownloadButton />
      <div className={classes.songInfo}>
        <h1>
          <Anchor href="#">
            <BigText>Cheraghooni</BigText>
            <NormalText>Ali Yasini</NormalText>
          </Anchor>
        </h1>
      </div>
      <LikeButton />
    </div>
  );
};

export default SongInfoDlFav;
