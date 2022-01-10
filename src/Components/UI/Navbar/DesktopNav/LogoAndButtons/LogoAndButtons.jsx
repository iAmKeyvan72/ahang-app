import React from 'react';

import classes from './LogoAndButtons.module.css';

import Image from '../../../Shared/Image/Image';
import Anchor from '../../../Shared/Anchor/Anchor';
import ActionButtons from './ActionButtons/ActionButtons';

const LogoAndButtons = () => {
  return (
    <div className={classes.logoAndButtonsContainer}>
      <ActionButtons />
      <Anchor href="/" className={classes.logoContainer}>
        <Image
          src="/images/logo.png"
          alt="Persian Music Platform"
          width={50}
          height={50}
        />
      </Anchor>
    </div>
  );
};

export default LogoAndButtons;
