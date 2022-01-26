import React from 'react';

import classes from './FeaturedPosts.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import PostTile from '../../Shared/Tiles/PostTile/PostTile';

import { useSuggestionTracks } from '../../../../hooks/useTracksContainer';

const FeaturedPosts = () => {
  const { renderedData: tracks, isLoading } = useSuggestionTracks();

  return (
    <section className={classes.featuredPosts}>
      <HeaderTitle>Featured</HeaderTitle>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className={classes.posts}>
          {tracks.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedPosts;
