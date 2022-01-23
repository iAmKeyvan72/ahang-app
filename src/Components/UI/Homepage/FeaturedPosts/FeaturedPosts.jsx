import React, { useContext } from 'react';

import classes from './FeaturedPosts.module.css';

import { SingleTracksContext } from '../../../../Contexts/TracksContext';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import PostTile from '../../Shared/Tiles/PostTile/PostTile';

const FeaturedPosts = () => {
  const { singleTracksList } = useContext(SingleTracksContext);

  return (
    <section className={classes.featuredPosts}>
      <HeaderTitle>Featured</HeaderTitle>
      <div className={classes.posts}>
        {singleTracksList.map((post) => (
          <PostTile key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
