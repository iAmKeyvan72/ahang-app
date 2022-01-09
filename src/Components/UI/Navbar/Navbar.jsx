import React, { useEffect, useState } from 'react';

import classes from './Navbar.module.css';

import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth < 600 ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
