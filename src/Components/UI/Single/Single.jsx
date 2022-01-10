import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import classes from './Single.module.css';

import {
  SingleTracksContext,
  SingleTracksContextProvider,
} from '../../../Contexts/SingleTracksContext';

import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';

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
    <div className={classes.container}>
      <MusicPlayerContainer post={post} nextUps={posts} />
      <NextUpListContainer posts={posts} />
    </div>
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
