import config from '../../../../config.json';

import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

import classes from './TotalPlayer.module.css';

import playerReducer from '../../../../reducers/playerReducer';

import ProgressBar from './ProgressBar/ProgressBar';
import ControllersContainer from './ControllersContainer/ControllersContainer';

const TotalPlayer = ({ currPost, nextUps }) => {
  const currentPostLink =
    process.env.REACT_APP_MEDIA_BASE_URL + currPost.link128;

  const [isReady, setIsReady] = useState(false);

  const router = useRouter();

  const nextSong = nextUps.find((post) => post.id != currPost.id);

  const [
    {
      url,
      pip,
      playing,
      controls,
      volume,
      muted,
      played,
      loaded,
      duration,
      playbackRate,
      progressInterval,
      loop,
      seeking,
    },
    dispatch,
  ] = useReducer(playerReducer, {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    progressInterval: 50,
    loop: false,
    seeking: false,
  });

  const playerRef = useRef();

  useEffect(() => {
    load(currentPostLink);
  }, [isReady, currentPostLink]);

  const load = (url) => {
    dispatch({
      type: 'LOAD',
      payload: {
        url,
      },
    });
  };

  const handleReady = () => {
    setIsReady(true);
  };

  const handlePlay = () => {
    dispatch({
      type: 'PLAY',
    });
  };

  const handlePause = () => {
    dispatch({
      type: 'PAUSE',
    });
  };

  const handlePlayPause = () => {
    dispatch({ type: 'TOGGLE_PLAY' });
  };

  const handleEnablePIP = () => {
    dispatch({
      type: 'ENABLE_PIP',
    });
  };

  const handleDisablePIP = () => {
    dispatch({
      type: 'DISABLE_PIP',
    });
  };

  const handleSeekMouseDown = (e) => {
    dispatch({
      type: 'SEEK_MOUSE_DOWN',
    });
  };

  const handleSeekChange = (e) => {
    dispatch({
      type: 'SEEK_CHANGE',
      played: parseFloat(e.target.value),
    });
  };

  const handleSeekMouseUp = (e) => {
    dispatch({
      type: 'SEEK_MOUSE_UP',
    });
    playerRef.current?.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = ({ played }) => {
    if (!seeking) {
      dispatch({
        type: 'MOVE_PROGRESS_INDICATOR',
        played,
      });
    }
  };

  const handleEnded = () => {
    router.replace(nextSong.slug);
  };

  const handleDuration = (duration) => {
    dispatch({ type: 'SET_DURATION', duration });
  };

  const handleRepeatOnce = () => {
    dispatch({ type: 'TOGGLE_REPEAT_ONCE' });
  };

  return (
    <div className={classes.playerContainer}>
      <ReactPlayer
        ref={playerRef}
        className={classes.reactPlayer}
        width="100%"
        height="100%"
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        loop={loop}
        volume={volume}
        muted={muted}
        progressInterval={progressInterval}
        onReady={handleReady}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={(e) => console.log('onSeek', e)}
        onEnded={handleEnded}
        onError={(e) => console.log('onError', e, e.message)}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className={classes.ahangPlayerContainer}>
        <ProgressBar
          duration={duration}
          played={played}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSeekMouseUp={handleSeekMouseUp}
          handleSeekChange={handleSeekChange}
        />
        <ControllersContainer
          isReady={isReady}
          playing={playing}
          handlePlayPause={handlePlayPause}
          handleRepeatOnce={handleRepeatOnce}
        />
      </div>
    </div>
  );
};

export default TotalPlayer;
