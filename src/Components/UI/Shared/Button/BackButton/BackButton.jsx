import React from 'react';
import { useRouter } from 'next/router';

import classes from './BackButton.module.css';

const BackButton = (props) => {
  const router = useRouter();

  return (
    <div className={classes.navigationHeader}>
      <button
        type="button"
        onClick={() => router.back()}
        className={classes.backButton}
      ></button>
    </div>
  );
};

export default BackButton;
