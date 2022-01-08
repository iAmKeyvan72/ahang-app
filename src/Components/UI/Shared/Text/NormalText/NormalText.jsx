import React from 'react';

import classes from './NormalText.module.css';

const NormalText = ({ weight, style, children }) => {
  let classNames = [classes.text];
  if (weight === 'bold') {
    classNames.push(classes.bold);
  }

  return (
    <p className={`${classNames.join(' ')}`} style={style}>
      {children}
    </p>
  );
};

export default NormalText;
