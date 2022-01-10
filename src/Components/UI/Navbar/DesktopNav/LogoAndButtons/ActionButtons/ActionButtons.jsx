import React from 'react';
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import { mdiAccount, mdiMagnify, mdiChevronLeft } from '@mdi/js';

import classes from './ActionButtons.module.css';

import Anchor from '../../../../Shared/Anchor/Anchor';
import IconButton from '../../../../Shared/Button/IconButton/IconButton';

const ActionButtons = () => {
  const router = useRouter();

  return (
    <ul className={classes.actionButtons}>
      {router.pathname !== '/' && (
        <li>
          <IconButton icon={mdiChevronLeft} onClick={() => router.back()} />
        </li>
      )}
      <li>
        <IconButton
          icon={mdiAccount}
          onClick={() => console.log('profile clicked')}
        />
      </li>
      <li className={router.pathname === '/search' ? classes.active : null}>
        <Anchor href="/search" title="Search">
          <Icon
            path={mdiMagnify}
            size={1.2}
            color={`var(--text-${
              router.pathname === '/search' ? '200' : '400'
            })`}
          />
        </Anchor>
      </li>
    </ul>
  );
};

export default ActionButtons;
