import React from 'react';

import classes from './BigText.module.css';

const BigText = ({ weight, children }) => {
  let classNames = [classes.text];
  if (weight === 'bold') {
    classNames.push(classes.bold);
  }

  return <span className={classNames.join(' ')}>{children}</span>;
};

export default BigText;
