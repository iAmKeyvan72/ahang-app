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
import { useTrack } from '../../../hooks/useTracksContainer';

const Single = () => {
  const router = useRouter();
  const { query, isReady } = router;

  if (!isReady) return <div>Loading ...</div>;

  const { trackId } = query;

  return (
    <motion.div className={classes.container}>
      <TrackContextProvider id={trackId}>
        {/* <NextTracksContextProvider id={trackId}> */}
        <MusicPlayerContainer />
        {/* <NextUpListContainer /> */}
        {/* </NextTracksContextProvider> */}
      </TrackContextProvider>
    </motion.div>
  );
};

export default Single;
