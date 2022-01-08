import React from 'react';

import classes from './TopSongsContainer.module.css';
import HeaderTitle from '../../../Shared/HeaderTitle/HeaderTitle';
import SquarePost from '../../../Shared/SquarePost/SquarePost';

const TopSongsContainer = ({ songs }) => {
  return (
    <div className={classes.topSongsContainer}>
      <HeaderTitle>Top Songs</HeaderTitle>

      <ul className={classes.songsList}>
        {songs.map((post) => (
          <li key={post.id}>
            <SquarePost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSongsContainer;
