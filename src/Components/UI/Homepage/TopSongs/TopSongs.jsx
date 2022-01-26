import config from '../../../../config.json';

import React from 'react';

import classes from './TopSongs.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';

import { useLatestTracks } from '../../../../hooks/useTracksContainer';

const TopSongs = () => {
  const { renderedData: posts, isLoading } = useLatestTracks();

  var perChunk = 3; // items per chunk
  var chunkedPosts = posts?.reduce((posts, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!posts[chunkIndex]) {
      posts[chunkIndex] = []; // start a new chunk
    }
    posts[chunkIndex].push(item);
    return posts;
  }, []);

  return (
    <section className={classes.topSongs}>
      <HeaderTitle>Top New Songs</HeaderTitle>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <HorizontalCarousel sliderConfig={config.sliders.homeLatestTracks}>
          {chunkedPosts.map((chunkedPost, index) => (
            <div className="keen-slider__slide" key={index}>
              <div className="songsColumn">
                {chunkedPost.map((post) => (
                  <RowPost key={post.id} post={post} hasBackground />
                ))}
              </div>
            </div>
          ))}
        </HorizontalCarousel>
      )}
    </section>
  );
};

export default TopSongs;
