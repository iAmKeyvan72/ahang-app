import React from 'react';

import classes from './HeaderTitle.module.css';

const HeaderTitle = ({ children, style }) => {
  return (
    <p className={classes.headerTitle} style={style}>
      {children}
    </p>
  );
};

export default HeaderTitle;
