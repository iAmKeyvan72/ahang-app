import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import classes from './MusicPlayerContainer.module.css';

import DynamicShadowImage from '../../Shared/DynamicShadowImage/DynamicShadowImage';
import SongInfoDlFav from './SongInfoDlFav/SongInfoDlFav';
import SongActionBox from './SongActionBox/SongActionBox';
import TotalPlayer from '../../Shared/TotalPlayer/TotalPlayer';

import { mainImageVariants } from '../../../../Animations/animations';
import { TrackContext } from '../../../../Contexts/TracksContext';

const MusicPlayerContainer = () => {
  const { renderedData: track, isLoading } = useContext(TrackContext);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const { coverImage, enName, artistsEnStr } = track;

  return (
    <div className={classes.musicPlayerContainer}>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
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
              alt={`${artistsEnStr} - ${enName}`}
              width={400}
              height={400}
              layout="responsive"
            />
          </motion.div>

          <SongInfoDlFav track={track} />

          {/* <TotalPlayer currPost={currPost} nextUps={nextUps} /> */}

          <SongActionBox track={track} />
        </div>
      )}
    </div>
  );
};

export default MusicPlayerContainer;
