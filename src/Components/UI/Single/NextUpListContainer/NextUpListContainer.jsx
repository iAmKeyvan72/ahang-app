import React from 'react';

import classes from './NextUpListContainer.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';

const NextUpListContainer = ({ posts }) => {
  return (
    <div className={classes.nextUpSongsContainer}>
      <HeaderTitle>Next Up</HeaderTitle>
      <div className={classes.postsList}>
        {posts.map((post) => (
          <RowPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default NextUpListContainer;
