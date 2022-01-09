import React from 'react';

import classes from './TopSongsContainer.module.css';
import HeaderTitle from '../../../Shared/HeaderTitle/HeaderTitle';
import SquarePost from '../../../Shared/SquarePost/SquarePost';

const TopSongsContainer = ({ songs }) => {
  return (
    <div className={classes.topSongsContainer}>
      <HeaderTitle>Top Songs</HeaderTitle>
      <div className={classes.songsList}>
        {songs.map((post) => (
          <SquarePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TopSongsContainer;
