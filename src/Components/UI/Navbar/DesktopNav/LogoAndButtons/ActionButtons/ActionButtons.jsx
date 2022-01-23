import React from 'react';
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import { mdiAccount, mdiMagnify, mdiChevronLeft } from '@mdi/js';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './ActionButtons.module.css';

import Anchor from '../../../../Shared/Anchor/Anchor';
import IconButton from '../../../../Shared/Button/IconButton/IconButton';

import {
  navbarItemVariants,
  staggerVariants,
} from '../../../../../../Animations/animations';

const ActionButtons = () => {
  const router = useRouter();

  return (
    <motion.ul variants={staggerVariants} className={classes.actionButtons}>
      {router.pathname !== '/' && (
        <AnimatePresence>
          <motion.li
            variants={navbarItemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="back"
          >
            <IconButton icon={mdiChevronLeft} onClick={() => router.back()} />
          </motion.li>
        </AnimatePresence>
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
    </motion.ul>
  );
};

export default ActionButtons;
