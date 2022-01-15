import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import classes from './Single.module.css';

import {
  SingleTracksContext,
  SingleTracksContextProvider,
} from '../../../Contexts/SingleTracksContext';

import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';

const containerVariants = {
  initial: {
    y: '100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    x: '-100vw',
  },
};

const Single = () => {
  const { isLoading, singleTracksList } = useContext(SingleTracksContext);

  const router = useRouter();
  const { asPath } = router;

  const post = singleTracksList.find((track) => track.slug === asPath);

  const { singleTracksList: posts } = useContext(SingleTracksContext);

  if (isLoading) {
    return <div>Loading Data...</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={classes.container}
    >
      <MusicPlayerContainer post={post} nextUps={posts} />
      <NextUpListContainer posts={posts} />
    </motion.div>
  );
};

const SingleWithoutContext = () => {
  return (
    <SingleTracksContextProvider>
      <Single />
    </SingleTracksContextProvider>
  );
};

export default SingleWithoutContext;
