import React, { useState } from 'react';
import {
  mdiRepeat,
  mdiRepeatOnce,
  mdiRepeatOff,
  mdiShuffleDisabled,
  mdiShuffle,
} from '@mdi/js';

import classes from './ControllersContainer.module.css';

import IconButton from '../../Button/IconButton/IconButton';
import MainControllersContainer from './MainControllersContainer/MainControllersContainer';

const SHUFFLE_STATUS = {
  ON: mdiShuffle,
  OFF: mdiShuffleDisabled,
};

const REPEAT_STATUS = {
  ALL: mdiRepeat,
  ONCE: mdiRepeatOnce,
  OFF: mdiRepeatOff,
};

const ControllersContainer = ({ isReady, playing, handlePlayPause }) => {
  const [shuffleStatus, setShuffleStatus] = useState(SHUFFLE_STATUS.OFF);
  const [repeatStatus, setRepeatStatus] = useState(REPEAT_STATUS.OFF);

  const handleShuffle = () => {
    setShuffleStatus((prevState) => {
      if (prevState == SHUFFLE_STATUS.ON) {
        return SHUFFLE_STATUS.OFF;
      } else {
        return SHUFFLE_STATUS.ON;
      }
    });
  };

  const handleRepeat = () => {
    setRepeatStatus((prevState) => {
      switch (prevState) {
        case REPEAT_STATUS.ALL:
          return REPEAT_STATUS.ONCE;

        case REPEAT_STATUS.ONCE:
          return REPEAT_STATUS.OFF;

        case REPEAT_STATUS.OFF:
          return REPEAT_STATUS.ALL;

        default:
          return REPEAT_STATUS.OFF;
      }
    });
  };

  return (
    <div className={classes.controllersContainer}>
      <IconButton
        icon={shuffleStatus}
        onClick={handleShuffle}
        color={`var(--${
          shuffleStatus != SHUFFLE_STATUS.OFF ? 'primary-500' : 'text-400'
        })`}
      />
      <MainControllersContainer
        isReady={isReady}
        playing={playing}
        handlePlayPause={handlePlayPause}
      />
      <IconButton
        icon={repeatStatus}
        onClick={handleRepeat}
        color={`var(--${
          repeatStatus != REPEAT_STATUS.OFF ? 'primary-500' : 'text-400'
        })`}
      />
    </div>
  );
};

export default ControllersContainer;
