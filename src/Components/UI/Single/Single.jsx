import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import classes from './Single.module.css';

import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';
import {
  NextTracksContextProvider,
  TrackContextProvider,
} from '../../../Contexts/TracksContext';

const Single = () => {
  const router = useRouter();
  const { trackId } = router.query;

  return (
    <motion.div className={classes.container}>
      <TrackContextProvider id={trackId}>
        <NextTracksContextProvider id={trackId}>
          <MusicPlayerContainer />
          <NextUpListContainer />
        </NextTracksContextProvider>
      </TrackContextProvider>
    </motion.div>
  );
};

export default Single;
