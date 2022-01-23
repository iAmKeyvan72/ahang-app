import React, { useContext } from 'react';

import { ArtistTracksContext } from '../../../../../Contexts/ArtistsContext';

import classes from './TopSongsContainer.module.css';
import HeaderTitle from '../../../Shared/HeaderTitle/HeaderTitle';
import PostTile from '../../../Shared/Tiles/PostTile/PostTile';

const TopSongsContainer = () => {
  const { data, isLoading } = useContext(ArtistTracksContext);

  return (
    <div className={classes.topSongsContainer}>
      <HeaderTitle>Top Songs</HeaderTitle>
      <div className={classes.infiniteScroll}>
        <div className={classes.songsList}>
          {data.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSongsContainer;
