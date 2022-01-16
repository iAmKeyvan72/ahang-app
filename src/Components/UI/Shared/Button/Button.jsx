import React from 'react';

import classes from './Button.module.css';

import Anchor from '../Anchor/Anchor';

const Button = (props) => {
  let classNames = [classes.btn];

  if (props.className.includes('curvedBtn')) {
    classNames.push(classes.curvedBtn);
  }
  if (props.className.includes('primary')) {
    classNames.push(classes.primary);
  }
  if (props.className.includes('secondary')) {
    classNames.push(classes.secondary);
  }

  return (
    <div className={classNames.join(' ')}>
      <Anchor {...props}>{props.children}</Anchor>
    </div>
  );
};

export default Button;
