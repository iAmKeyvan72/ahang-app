import React from 'react';

import classes from './FeaturedAlbumsHorizontal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import AlbumTile from '../../Shared/Tiles/AlbumTile/AlbumTile';

const FeaturedAlbumsHorizontal = (props) => {
  const sliderConfig = {
    breakpoints: {
      '(min-width: 580px)': {
        slides: {
          perView: 3.5,
          spacing: 10,
        },
      },
      '(min-width: 700px)': {
        slides: {
          perView: 4.5,
          spacing: 15,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 7.5,
          spacing: 20,
        },
      },
    },
    slides: {
      perView: 2.3,
      spacing: 20,
    },
  };

  const albums = [
    {
      id: 0,
      artist: 'Donya',
      name: 'Donya',
      image: '/images/temp/albums/Donya - Donya.jpg',
      url: '#',
    },
    {
      id: 1,
      artist: 'Shayea',
      name: 'Injaneb',
      image: '/images/temp/albums/Shayea - Injaneb.jpg',
      url: '#',
    },
    {
      id: 2,
      artist: 'Amirhossein Eftekhari',
      name: 'Moo Parishan',
      image: '/images/temp/albums/Amirhossein Eftekhari - Moo Parishan.jpg',
      url: '#',
    },
  ];

  return (
    <section className={classes.featuredAlbums}>
      <HeaderTitle>Top Albums</HeaderTitle>
      <HorizontalCarousel sliderConfig={sliderConfig}>
        {albums.map((album) => (
          <div
            className={`keen-slider__slide ${classes.fixHeight}`}
            key={album.id}
          >
            <AlbumTile album={album} />
          </div>
        ))}
      </HorizontalCarousel>
    </section>
  );
};

export default FeaturedAlbumsHorizontal;
