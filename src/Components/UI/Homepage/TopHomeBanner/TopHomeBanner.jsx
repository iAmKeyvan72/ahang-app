import config from '../../../../config.json';

import React from 'react';

import classes from './TopHomeBanner.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import TopHomeFeaturePost from './TopHomeFeaturePost/TopHomeFeaturePost';
import { usePromotions } from '../../../../hooks/usePromotionsContainer';

const TopHomeBanner = () => {
  const { renderedData, isLoading } = usePromotions();

  return (
    <section className={classes.homeTopBanners}>
      <HeaderTitle>Today Most Popular</HeaderTitle>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <HorizontalCarousel sliderConfig={config.sliders.homePromotions}>
          {renderedData?.map((post) => {
            return (
              <div className="keen-slider__slide" key={post.id}>
                <TopHomeFeaturePost post={post} />
              </div>
            );
          })}
        </HorizontalCarousel>
      )}
    </section>
  );
};

export default TopHomeBanner;
