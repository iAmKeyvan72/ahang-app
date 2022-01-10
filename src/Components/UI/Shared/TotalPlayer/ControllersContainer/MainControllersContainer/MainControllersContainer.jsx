import React from 'react';
import {
  mdiLoading,
  mdiPauseCircle,
  mdiPlayCircle,
  mdiSkipNext,
  mdiSkipPrevious,
} from '@mdi/js';

import classes from './MainControllersContainer.module.css';

import IconButton from '../../../Button/IconButton/IconButton';

const MainControllersContainer = ({ isReady, playing, handlePlayPause }) => {
  return (
    <div className={classes.mainControllersContainer}>
      <IconButton
        icon={mdiSkipPrevious}
        onClick={() => console.log('Previous Clicked')}
        size={1.8}
        color="var(--text-400)"
      />
      <IconButton
        icon={isReady ? (playing ? mdiPauseCircle : mdiPlayCircle) : mdiLoading}
        onClick={handlePlayPause}
        spin={isReady ? false : true}
        size={2.5}
      />
      <IconButton
        icon={mdiSkipNext}
        onClick={() => console.log('Next Clicked')}
        size={1.8}
        color="var(--text-400)"
      />
    </div>
  );
};

export default MainControllersContainer;
