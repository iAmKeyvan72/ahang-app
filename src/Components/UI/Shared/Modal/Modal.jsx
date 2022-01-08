import React from 'react';

import classes from './Modal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import CloseButton from '../../Shared/Button/CloseButton/CloseButton';

const Modal = (props) => {
  return (
    <aside>
      <div className={classes.modalHeader}>
        <HeaderTitle>Title</HeaderTitle>
        <CloseButton />
      </div>
      <div className={classes.modalContent}>
        Adipisicing esse amet ex tempor ex cillum pariatur. Dolore reprehenderit
        officia laboris Lorem commodo laboris officia fugiat fugiat duis laborum
        pariatur anim. Incididunt enim excepteur velit magna occaecat anim sunt
        enim id velit et sunt dolore commodo. Sint in minim in exercitation
        reprehenderit elit voluptate ut. Culpa aliqua ex pariatur consequat
        velit ad magna anim labore cillum officia duis veniam laborum.
      </div>
    </aside>
  );
};

export default Modal;
