import config from '../../../../config.json';

import React from 'react';

import classes from './FeaturedAlbumsHorizontal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import AlbumTile from '../../Shared/Tiles/AlbumTile/AlbumTile';
import { motion } from 'framer-motion';
import { tileVariants } from '../../../../Animations/animations';
import { useSpecialAlbums } from '../../../../hooks/useAlbumsContainer';

const FeaturedAlbumsHorizontal = () => {
  const { renderedData: albums, isLoading } = useSpecialAlbums();

  return (
    <section className={classes.featuredAlbums}>
      <HeaderTitle>Top Albums</HeaderTitle>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <HorizontalCarousel sliderConfig={config.sliders.homeFeaturedAlbums}>
          {albums.map((album) => (
            <div
              className={`keen-slider__slide ${classes.fixHeight}`}
              key={album.id}
            >
              <AlbumTile album={album} />
            </div>
          ))}
        </HorizontalCarousel>
      )}
    </section>
  );
};

export default FeaturedAlbumsHorizontal;
