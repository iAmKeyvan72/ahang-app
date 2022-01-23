import React from 'react';
import { motion } from 'framer-motion';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';
import TotalPlayer from '../../Shared/TotalPlayer/TotalPlayer';

import { mainImageVariants } from '../../../../Animations/animations';

const MusicPlayerContainer = () => {
  const { data: track, isLoading } = useContext(TrackContext);

  const { artistsEnList, enName, coverImage } = track;

  const artistEnStr = artistsEnList.join(' & ');

  return (
    <div className={classes.musicPlayerContainer}>
      <div className={classes.contentsWrapper}>
        <motion.div
          variants={mainImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={classes.coverContainer}
        >
          <DynamicShadowImage
            src={coverImage}
            alt={`${artistEnStr} - ${enName}`}
            width={400}
            height={400}
            layout="responsive"
          />
        </motion.div>

        <SongInfoDlFav />

        <TotalPlayer currPost={currPost} nextUps={nextUps} />

        <SongActionBox />
      </div>
    </div>
  );
};

export default MusicPlayerContainer;
