import React, { useReducer } from 'react';
import Icon from '@mdi/react';
import {
  mdiAccountMusic,
  mdiPlaylistPlus,
  mdiVideoOutline,
  mdiText,
  mdiShareVariant,
} from '@mdi/js';

import classes from './SongActionBox.module.css';

import ArtistModal from './ArtistsModal/ArtistsModal';
import AddToPlaylistModal from './AddToPlaylistModal/AddToPlaylistModal';
import LyricsModal from './LyricsModal/LyricsModal';
import ShareModal from './ShareModal/ShareModal';

import IconButton from '../../../Shared/Button/IconButton/IconButton';
import Anchor from '../../../Shared/Anchor/Anchor';

const actionsReducer = (state, action) => {
  let closeModals = {
    showArtistsModal: false,
    showAddToPlaylistModal: false,
    showLyricsModal: false,
    showShareModal: false,
  };
  switch (action.type) {
    case 'toggleArtistsModal':
      console.log('artist clicked');
      return {
        ...state,
        modals: { ...closeModals, showArtistsModal: true },
      };

    case 'toggleAddToPlaylistModal':
      console.log('addToPlaylist clicked');
      return {
        ...state,
        modals: { ...closeModals, showAddToPlaylistModal: true },
      };

    case 'toggleLyricsModal':
      console.log('lyrics clicked');
      return {
        ...state,
        modals: { ...closeModals, showLyricsModal: true },
      };

    case 'toggleShareModal':
      console.log('share clicked');
      return {
        ...state,
        modals: { ...closeModals, showShareModal: true },
      };

    case 'closeModals': {
      console.log('close all modals');
      return { ...state, modals: closeModals };
    }

    default:
      return state;
      break;
  }
};

const SongActionBox = ({ post }) => {
  const [actions, dispatch] = useReducer(actionsReducer, {
    modals: {
      showArtistsModal: false,
      showAddToPlaylistModal: false,
      showLyricsModal: false,
      showShareModal: false,
    },
  });

  const modalCloseHandler = () => {
    console.log('close clicked!');
  };

  return (
    <div className={classes.songActionBox}>
      <IconButton
        icon={mdiAccountMusic}
        onClick={() => dispatch({ type: 'toggleArtistsModal' })}
      />
      <IconButton
        icon={mdiPlaylistPlus}
        onClick={() => dispatch({ type: 'toggleAddToPlaylistModal' })}
      />
      <Anchor href={post.videoUrl}>
        <Icon path={mdiVideoOutline} size={1.1} color="var(--text-300)" />
      </Anchor>
      <IconButton
        icon={mdiText}
        onClick={() => dispatch({ type: 'toggleLyricsModal' })}
      />
      <IconButton
        icon={mdiShareVariant}
        onClick={() => dispatch({ type: 'toggleShareModal' })}
      />

      {actions.modals.showArtistsModal && (
        <ArtistModal
          artists={post.artists}
          close={() => dispatch({ type: 'closeModals' })}
        />
      )}
      {actions.modals.showAddToPlaylistModal && (
        <AddToPlaylistModal
          post={post}
          close={() => dispatch({ type: 'closeModals' })}
        />
      )}
      {actions.modals.showLyricsModal && (
        <LyricsModal
          lyrics={post.lyrics}
          close={() => dispatch({ type: 'closeModals' })}
        />
      )}
      {actions.modals.showShareModal && (
        <ShareModal close={() => dispatch({ type: 'closeModals' })} />
      )}
    </div>
  );
};

export default SongActionBox;
