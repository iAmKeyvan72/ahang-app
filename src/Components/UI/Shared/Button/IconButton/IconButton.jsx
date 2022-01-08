import React from 'react';
import Icon from '@mdi/react';

import classes from './IconButton.module.css';

const IconButton = (props) => {
  const { type, title, icon, onClick, style, size, color, children } = props;

  return (
    <button
      type={type ? type : 'button'}
      className={classes.iconBtn}
      style={style}
      onClick={onClick}
    >
      <Icon
        path={icon}
        id={Math.random()}
        title={title}
        size={size ? size : 1.1}
        color={color ? color : 'var(--text-300)'}
      />
    </button>
  );
};

export default IconButton;
