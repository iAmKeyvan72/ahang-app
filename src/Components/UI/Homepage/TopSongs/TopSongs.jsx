import React, { useContext } from 'react';

import classes from './TopSongs.module.css';

import { SingleTracksContext } from '../../../../Contexts/SingleTracksContext';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';

const TopSongs = (props) => {
  const { singleTracksList: posts } = useContext(SingleTracksContext);

  const sliderConfig = {
    breakpoints: {
      '(min-width: 700px)': {
        slides: {
          perView: 2.1,
          spacing: 5,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3.1,
          spacing: 15,
        },
      },
      '(min-width: 1500px)': {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
    },
    slides: {
      perView: 1.1,
    },
  };

  var perChunk = 3; // items per chunk
  var chunkedPosts = posts.reduce((posts, item, index) => {
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

      <HorizontalCarousel sliderConfig={sliderConfig}>
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
    </section>
  );
};

export default TopSongs;
