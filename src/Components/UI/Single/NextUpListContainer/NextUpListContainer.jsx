import React, { useContext } from 'react';

import { SingleTracksContext } from '../../../../Contexts/SingleTracksContext';

import classes from './NextUpListContainer.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';

const NextUpListContainer = (props) => {
  const { singleTracksList: posts } = useContext(SingleTracksContext);

  return (
    <div className={classes.nextUpSongsContainer}>
      <HeaderTitle>Next Up</HeaderTitle>
      <ul className="songsList">
        {posts.map((post) => (
          <li key={post.id}>
            <RowPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextUpListContainer;
