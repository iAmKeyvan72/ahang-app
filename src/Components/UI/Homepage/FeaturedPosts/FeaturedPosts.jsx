import React, { useContext } from 'react';

import classes from './FeaturedPosts.module.css';

import { SingleTracksContext } from '../../../../Contexts/SingleTracksContext';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import SquarePost from '../../Shared/SquarePost/SquarePost';

const FeaturedPosts = () => {
  const { singleTracksList } = useContext(SingleTracksContext);

  return (
    <section className={classes.featuredPosts}>
      <HeaderTitle>Featured</HeaderTitle>
      <div className={classes.posts}>
        {singleTracksList.map((post) => (
          <SquarePost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
