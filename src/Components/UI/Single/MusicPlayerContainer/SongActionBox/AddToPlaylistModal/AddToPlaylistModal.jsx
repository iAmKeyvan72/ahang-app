import React from 'react';
import Modal from '../../../../Shared/Modal/Modal';

import classes from './AddToPlaylistModal.module.css';

const AddToPlaylistModal = ({ post, close }) => {
  return (
    <Modal title="Add To Playlist" close={close}>
      <div>Add To Playlist if you are logged in!</div>
    </Modal>
  );
};

export default AddToPlaylistModal;
