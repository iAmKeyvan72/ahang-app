import React from 'react';

import classes from './Single.module.css';

import BackButton from '../Shared/Button/BackButton/BackButton';
import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';

const Single = (props) => {
  return (
    <>
      <BackButton />
      <div className={classes.container}>
        <MusicPlayerContainer />
        <NextUpListContainer />
      </div>
    </>
  );
};

export default Single;
