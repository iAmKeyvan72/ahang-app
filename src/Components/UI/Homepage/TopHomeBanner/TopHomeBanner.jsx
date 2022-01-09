import React, { useContext } from 'react';

import classes from './TopHomeBanner.module.css';

import { SingleTracksContext } from '../../../../Contexts/SingleTracksContext';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import TopHomeFeaturePost from './TopHomeFeaturePost/TopHomeFeaturePost';

const TopHomeBanner = () => {
  const { isLoading, singleTracksList } = useContext(SingleTracksContext);

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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <HorizontalCarousel sliderConfig={sliderConfig}>
          {singleTracksList.map((post) => (
            <div className="keen-slider__slide" key={post.id}>
              <TopHomeFeaturePost post={post} />
            </div>
          ))}
        </HorizontalCarousel>
      )}
    </section>
  );
};

export default TopHomeBanner;
