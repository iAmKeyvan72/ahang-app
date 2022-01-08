import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import classes from './Modal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import IconButton from '../Button/IconButton/IconButton';

const Modal = ({ title, close, children }) => {
  return (
    <aside className={classes.modal}>
      <div className={classes.modalBox}>
        <div className={classes.modalHeader}>
          <HeaderTitle>{title}</HeaderTitle>
          <IconButton icon={mdiClose} onClick={close} />
        </div>
        <div className={classes.modalContent}>{children}</div>
      </div>
    </aside>
  );
};

export default Modal;
