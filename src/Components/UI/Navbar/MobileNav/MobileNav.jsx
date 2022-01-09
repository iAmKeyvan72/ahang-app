import React from 'react';
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import {
  mdiHomeVariant,
  mdiHomeVariantOutline,
  mdiMagnify,
  mdiDotsVertical,
} from '@mdi/js';

import classes from './MobileNav.module.css';

import Anchor from '../../Shared/Anchor/Anchor';
import IconButton from '../../Shared/Button/IconButton/IconButton';

const MobileNav = () => {
  const router = useRouter();

  return (
    <div className={classes.mobileNavContainer}>
      <ul>
        <li className={router.pathname === '/' ? classes.active : null}>
          <Anchor href="/" title="Homepage">
            <Icon
              path={
                router.pathname === '/' ? mdiHomeVariant : mdiHomeVariantOutline
              }
              size={1.2}
              color={`var(--text-${router.pathname === '/' ? '200' : '400'})`}
            />
          </Anchor>
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
        <li>
          <IconButton
            icon={mdiDotsVertical}
            onClick={() => console.log('more clicked')}
            color="var(--text-400"
          />
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
