import React from 'react';
import Modal from '../../../../Shared/Modal/Modal';

import classes from './LyricsModal.module.css';

const LyricsModal = ({ lyrics, close }) => {
  return (
    <Modal title="Lyrics" close={close}>
      <p className={classes.lyrics}>{lyrics}</p>
    </Modal>
  );
};

export default LyricsModal;
