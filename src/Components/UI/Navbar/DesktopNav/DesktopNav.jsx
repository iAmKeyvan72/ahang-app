import React, { useEffect, useState } from 'react';

import classes from './DesktopNav.module.css';

import NavigationLinks from './NavigationLinks/NavigationLinks';
import LogoAndButtons from './LogoAndButtons/LogoAndButtons';

const DesktopNav = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <LogoAndButtons />
      <NavigationLinks scrolled={scrolled} />
    </nav>
  );
};

export default DesktopNav;
