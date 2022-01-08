import React from 'react';

import classes from './BigText.module.css';

const BigText = ({ weight, style, children }) => {
  let classNames = [classes.text];
  if (weight === 'bold') {
    classNames.push(classes.bold);
  }

  return (
    <p className={classNames.join(' ')} style={style}>
      {children}
    </p>
  );
};

export default BigText;
