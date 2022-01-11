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
  ON: { mode: 'on', path: mdiShuffle },
  OFF: { mode: 'off', path: mdiShuffleDisabled },
};

const REPEAT_STATUS = {
  ALL: { mode: 'all', path: mdiRepeat },
  ONCE: { mode: 'once', path: mdiRepeatOnce },
  OFF: { mode: 'off', path: mdiRepeatOff },
};

const ControllersContainer = ({
  isReady,
  playing,
  handlePlayPause,
  handleRepeatOnce,
}) => {
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
    handleRepeatOnce();
    setRepeatStatus((prevState) => {
      if (prevState == REPEAT_STATUS.ONCE) {
        return REPEAT_STATUS.OFF;
      } else {
        return REPEAT_STATUS.ONCE;
      }
    });
  };

  return (
    <div className={classes.controllersContainer}>
      <IconButton
        icon={shuffleStatus.path}
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
        icon={repeatStatus.path}
        onClick={handleRepeat}
        color={`var(--${
          repeatStatus != REPEAT_STATUS.OFF ? 'primary-500' : 'text-400'
        })`}
      />
    </div>
  );
};

export default ControllersContainer;
