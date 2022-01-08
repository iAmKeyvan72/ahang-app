import React from 'react';
import { default as NextImage } from 'next/image';

import classes from './Image.module.css';

const Image = (props) => {
  return (
    <NextImage
      {...props}
      className={`${
        props.className === 'circleImage'
          ? classes.circleImage
          : classes.corneredImage
      }`}
    />
  );
};

export default Image;
