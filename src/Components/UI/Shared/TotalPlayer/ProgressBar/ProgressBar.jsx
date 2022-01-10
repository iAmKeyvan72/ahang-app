import React, { useRef, useEffect } from 'react';

import classes from './ProgressBar.module.css';

import Duration from '../../Duration/Duration';
import NormalText from '../../Text/NormalText/NormalText';

const ProgressBar = ({
  duration,
  played,
  handleSeekChange,
  handleSeekMouseDown,
  handleSeekMouseUp,
}) => {
  const progressRef = useRef();

  useEffect(() => {
    progressRef.current.style.backgroundSize = `${played * 100}% 100%`;
  }, [played]);

  return (
    <div className={classes.progressBarContainer}>
      <NormalText>
        <Duration seconds={duration * played} />
      </NormalText>
      <input
        className={`${classes.progressBar} ${classes.sliderProgress}`}
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        ref={progressRef}
      />
      <NormalText>
        <Duration seconds={duration} />
      </NormalText>
    </div>
  );
};

export default ProgressBar;
