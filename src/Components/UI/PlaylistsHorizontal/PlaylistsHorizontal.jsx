import React from 'react';

import classes from './PlaylistsHorizontal.module.css';

import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../HorizontalCarousel/HorizontalCarousel';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

const PlaylistsHorizontal = (props) => {
  const playlists = [
    {
      title: 'Feel Good',
      image: '/images/temp/playlists/Feel Good.jpg',
      url: '#',
    },
    {
      title: 'Mood',
      image: '/images/temp/playlists/Mood.jpg',
      url: '#',
    },
    {
      title: 'Decades',
      image: '/images/temp/playlists/Decades.jpg',
      url: '#',
    },
    {
      title: 'Chill',
      image: '/images/temp/playlists/Chill.jpg',
      url: '#',
    },
    {
      title: 'Hip Hop',
      image: '/images/temp/playlists/Hip Hop.jpg',
      url: '#',
    },
    {
      title: 'New Releases',
      image: '/images/temp/playlists/New Releases.jpg',
      url: '#',
    },
  ];

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
      perView: 2.5,
      spacing: 10,
    },
  };

  return (
    <section className={classes.playlistsHorizontal}>
      <HeaderTitle>Most Popular Playlists</HeaderTitle>
      <HorizontalCarousel sliderConfig={sliderConfig}>
        {playlists.map((playlist) => (
          <div className="keen-slider__slide" key={playlist.id}>
            <PlaylistContainer playlist={playlist} />
          </div>
        ))}
      </HorizontalCarousel>
    </section>
  );
};

export default PlaylistsHorizontal;
