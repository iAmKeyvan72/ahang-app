import React from 'react';
import Modal from '../../../../Shared/Modal/Modal';

import classes from './ShareModal.module.css';

const ShareModal = ({ slug, close }) => {
  return (
    <Modal title="Share" close={close}>
      Share on Socials
    </Modal>
  );
};

export default ShareModal;
