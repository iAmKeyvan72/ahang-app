import React from 'react';
import { motion } from 'framer-motion';

import classes from './PlaylistsHorizontal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';

const PlaylistsHorizontal = (props) => {
  const playlists = [
    {
      id: 0,
      title: 'Feel Good',
      image: '/images/temp/playlists/Feel Good.jpg',
      url: '#',
    },
    {
      id: 1,
      title: 'Mood',
      image: '/images/temp/playlists/Mood.jpg',
      url: '#',
    },
    {
      id: 2,
      title: 'Decades',
      image: '/images/temp/playlists/Decades.jpg',
      url: '#',
    },
    {
      id: 3,
      title: 'Chill',
      image: '/images/temp/playlists/Chill.jpg',
      url: '#',
    },
    {
      id: 4,
      title: 'Hip Hop',
      image: '/images/temp/playlists/Hip Hop.jpg',
      url: '#',
    },
    {
      id: 5,
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
      <motion.div>
        <HorizontalCarousel sliderConfig={sliderConfig}>
          {playlists.map((playlist) => (
            <motion.div className="keen-slider__slide" key={playlist.id}>
              <PlaylistContainer playlist={playlist} />
            </motion.div>
          ))}
        </HorizontalCarousel>
      </motion.div>
    </section>
  );
};

export default PlaylistsHorizontal;
