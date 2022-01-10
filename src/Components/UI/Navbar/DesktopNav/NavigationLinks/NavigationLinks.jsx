import React from 'react';

import classes from './NavigationLinks.module.css';

import Anchor from '../../../Shared/Anchor/Anchor';
import NormalText from '../../../Shared/Text/NormalText/NormalText';

const NavigationLinks = ({ scrolled }) => {
  return (
    <ul
      className={`${classes.navigationLinks} ${
        scrolled ? classes.scrollStyle : ''
      }`}
    >
      <li>
        <Anchor href="/tracks/">
          <NormalText>Tracks</NormalText>
        </Anchor>
      </li>
      <li>
        <Anchor href="#">
          <NormalText>Playlists</NormalText>
        </Anchor>
      </li>
      <li>
        <Anchor href="#">
          <NormalText>Albums</NormalText>
        </Anchor>
      </li>
      <li>
        <Anchor href="#">
          <NormalText>Artists</NormalText>
        </Anchor>
      </li>
    </ul>
  );
};

export default NavigationLinks;
