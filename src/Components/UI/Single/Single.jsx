import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { mdiChevronLeft } from '@mdi/js';

import classes from './Single.module.css';

import {
  SingleTracksContext,
  SingleTracksContextProvider,
} from '../../../Contexts/SingleTracksContext';

import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';
import IconButton from '../Shared/Button/IconButton/IconButton';

const Single = () => {
  const { isLoading, singleTracksList } = useContext(SingleTracksContext);

  const router = useRouter();
  const { asPath } = router;

  const post = singleTracksList.find((track) => track.slug === asPath);

  if (isLoading) {
    return <div>Loading Data...</div>;
  }

  return (
    <>
      <div className={classes.container}>
        <MusicPlayerContainer post={post} />
        <NextUpListContainer />
      </div>
    </>
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
