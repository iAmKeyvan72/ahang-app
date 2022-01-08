import React from 'react';

import classes from './BigText.module.css';

const BigText = ({ weight, children }) => {
  let classNames = [classes.text];
  if (weight === 'bold') {
    classNames.push(classes.bold);
  }

  return <p className={classNames.join(' ')}>{children}</p>;
};

export default BigText;
