import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { mdiAccount, mdiMagnify, mdiChevronLeft } from '@mdi/js';

import classes from './DesktopNav.module.css';

import Image from '../../Shared/Image/Image';
import IconButton from '../../Shared/Button/IconButton/IconButton';
import Anchor from '../../Shared/Anchor/Anchor';

const DesktopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.document.addEventListener('scroll', handleScroll);
    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${classes.desktopNavbar} ${
        scrolled ? classes.fixedBack : null
      }`}
    >
      <div className={classes.logoAndButtonsContainer}>
        <div className={classes.actionButtons}>
          {router.pathname !== '/' && (
            <IconButton icon={mdiChevronLeft} onClick={() => router.back()} />
          )}
          <IconButton
            icon={mdiAccount}
            onClick={() => console.log('profile clicked')}
          />
          <IconButton
            icon={mdiMagnify}
            onClick={() => console.log('search clicked')}
          />
        </div>
        <Anchor href="/" className={classes.logoContainer}>
          <Image
            src="/images/logo.png"
            alt="Persian Music Platform"
            width={50}
            height={50}
          />
        </Anchor>
      </div>
      <ul className={classes.navigationLinks}>
        <li>
          <Anchor href="/tracks/">Tracks</Anchor>
        </li>
        <li>
          <Anchor href="#">Playlists</Anchor>
        </li>
        <li>
          <Anchor href="#">Albums</Anchor>
        </li>
        <li>
          <Anchor href="#">Artists</Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
