import React, { useReducer } from 'react';

import classes from './SongActionBox.module.css';

import ArtistIconButton from '../../../Shared/Button/ArtistIconButton/ArtistIconButton';
import VideoIconButton from '../../../Shared/Button/VideoIconButton/VideoIconButton';
import AddToPlaylistIconButton from '../../../Shared/Button/AddToPlaylistIconButton/AddToPlaylistIconButton';
import LyricsIconButton from '../../../Shared/Button/LyricsIconButton/LyricsIconButton';
import ShareIconButton from '../../../Shared/Button/ShareIconButton/ShareIconButton';

const actionsReducer = (state, action) => {
  switch (action.type) {
    case 'showArtistsModal':
      return { ...state, showArtistModal: true };
      break;

    default:
      break;
  }
};

const SongActionBox = (props) => {
  const [actions, dispatch] = useReducer({
    artists: 'post.artists',

    lyrics: { props },
    videoUrl: null,
  });

  return (
    <ul className={classes.songActionBox}>
      <li>
        <ArtistIconButton />
      </li>
      <li>
        <VideoIconButton />
      </li>
      <li>
        <AddToPlaylistIconButton />
      </li>
      <li>
        <LyricsIconButton />
      </li>
      <li>
        <ShareIconButton />
      </li>
    </ul>
  );
};

export default SongActionBox;
