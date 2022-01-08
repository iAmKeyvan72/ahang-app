import React from 'react';

import classes from './TopSongs.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';

const TopSongs = (props) => {
  const posts = [
    {
      id: 0,
      artist: 'Behzad Leito',
      song: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 1,
      artist: 'Sina Mafee',
      song: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 2,
      artist: 'EpiCure',
      song: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 3,
      artist: 'Behzad Leito',
      song: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 4,
      artist: 'Sina Mafee',
      song: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 5,
      artist: 'EpiCure',
      song: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 6,
      artist: 'Behzad Leito',
      song: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 7,
      artist: 'Sina Mafee',
      song: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 8,
      artist: 'EpiCure',
      song: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 9,
      artist: 'Behzad Leito',
      song: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 10,
      artist: 'Sina Mafee',
      song: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 11,
      artist: 'EpiCure',
      song: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
  ];

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
