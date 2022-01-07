import React from 'react';

import classes from './TopHomeBanner.module.css';

import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../HorizontalCarousel/HorizontalCarousel';
import TopHomeFeaturePost from '../TopHomeFeaturePost/TopHomeFeaturePost';

const TopHomeBanner = (props) => {
  const posts = [
    {
      id: 0,
      artist: 'Behnam Bani',
      song: 'Akhmato Va Kon',
      image: '/images/temp/singles/Behnam Bani Akhmato Va Kon.jpg',
      url: '#',
    },
    {
      id: 1,
      artist: 'Ali Yasini',
      song: 'Cheraghooni',
      image: '/images/temp/singles/Ali Yasini - Cheraghooni.jpg',
      url: '#',
    },
    {
      id: 2,
      artist: 'Ashvan',
      song: 'Sheyda',
      image: '/images/temp/singles/Ashvan Sheyda.jpg',
      url: '#',
    },
    {
      id: 3,
      artist: 'Behnam Bani',
      song: 'Akhmato Va Kon',
      image: '/images/temp/singles/Behnam Bani Akhmato Va Kon.jpg',
      url: '#',
    },
    {
      id: 4,
      artist: 'Ali Yasini',
      song: 'Cheraghooni',
      image: '/images/temp/singles/Ali Yasini - Cheraghooni.jpg',
      url: '#',
    },
    {
      id: 5,
      artist: 'Ashvan',
      song: 'Sheyda',
      image: '/images/temp/singles/Ashvan Sheyda.jpg',
      url: '#',
    },
  ];

  const sliderConfig = {
    breakpoints: {
      '(min-width: 700px)': {
        slides: {
          perView: 2.5,
          spacing: 5,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3.5,
          spacing: 15,
        },
      },
    },
    slides: {
      perView: 1.2,
      // spacing: 20,
    },
    loop: true,
  };

  return (
    <section className={classes.homeTopBanners}>
      <HeaderTitle>Today Most Popular</HeaderTitle>
      <HorizontalCarousel sliderConfig={sliderConfig}>
        {posts.map((post) => (
          <div className="keen-slider__slide" key={post.id}>
            <TopHomeFeaturePost post={post} />
          </div>
        ))}
      </HorizontalCarousel>
    </section>
  );
};

export default TopHomeBanner;
