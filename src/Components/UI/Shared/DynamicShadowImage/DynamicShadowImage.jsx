import React from 'react';
import { default as NextImage } from 'next/image';

import classes from './DynamicShadowImage.module.css';

const DynamicShadowImage = (props) => {
  return (
    <div className={classes.dynamicShadowImage}>
      <NextImage
        {...props}
        className={`${classes.image} ${classes.imageObject}`}
      />
      <NextImage
        {...props}
        className={`${classes.image} ${classes.imageShadow}`}
      />
    </div>
  );
};
export default DynamicShadowImage;
