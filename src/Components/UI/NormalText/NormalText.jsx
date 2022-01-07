import React from 'react';

import classes from './NormalText.module.css';

const NormalText = ({ weight, children }) => {
  let classNames = [classes.text];
  if (weight === 'bold') {
    classNames.push(classes.bold);
  }

  return <span className={`${classNames.join(' ')}`}>{children}</span>;
};

export default NormalText;
