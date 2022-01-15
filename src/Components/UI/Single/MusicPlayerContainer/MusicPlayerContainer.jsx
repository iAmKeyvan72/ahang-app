import React from 'react';
import { motion } from 'framer-motion';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';
import TotalPlayer from '../../Shared/TotalPlayer/TotalPlayer';

const wrapperVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const imageVariants = {
  initial: { scale: 0.8, opacity: 0, y: -80 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
};

const MusicPlayerContainer = ({ post: currPost, nextUps }) => {
  const { artistsEnList, enName, coverImage } = currPost;

  const artistEnStr = artistsEnList.join(' & ');

  return (
    <motion.div
      className={classes.musicPlayerContainer}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={stagger} className={classes.contentsWrapper}>
        <motion.div className={classes.coverContainer} variants={imageVariants}>
          <DynamicShadowImage
            src={coverImage}
            alt={`${artistEnStr} - ${enName}`}
            width={400}
            height={400}
            layout="responsive"
          />
        </motion.div>

        <SongInfoDlFav post={currPost} />

        <TotalPlayer currPost={currPost} nextUps={nextUps} />

        <SongActionBox post={currPost} />
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayerContainer;
