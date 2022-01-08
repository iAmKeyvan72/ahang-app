import React from 'react';
import { mdiChevronLeft } from '@mdi/js';
import { useRouter } from 'next/router';

import classes from './Artist.module.css';

import IconButton from '../Shared/Button/IconButton/IconButton';
import ProfileSongsContainer from './ProfileSongsContainer/ProfileSongsContainer';

const Artist = (props) => {
  const artist = {
    faName: 'علی یاسینی',
    enName: 'Ali Yasini',
    image: '/images/temp/artists/Ali Yasini.jpg',
    totalSongs: 23,
    followed: false,
  };
  const songs = [
    {
      id: 0,
      artist: 'Behzad Leito',
      name: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 1,
      artist: 'Sina Mafee',
      name: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 2,
      artist: 'EpiCure',
      name: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 3,
      artist: 'Behzad Leito',
      name: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 4,
      artist: 'Sina Mafee',
      name: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 5,
      artist: 'EpiCure',
      name: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 6,
      artist: 'Behzad Leito',
      name: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
    {
      id: 7,
      artist: 'Sina Mafee',
      name: 'Nemigzare',
      image: '/images/temp/singles/Sina Mafee Nemigzare.jpg',
      url: '#',
    },
    {
      id: 8,
      artist: 'EpiCure',
      name: 'Baba Karam',
      image: '/images/temp/singles/epicure-babakaram.jpg',
      url: '#',
    },
    {
      id: 9,
      artist: 'Behzad Leito',
      name: 'Residam Tash',
      image: '/images/temp/singles/Leito Residam Tash.jpg',
      url: '#',
    },
  ];

  const router = useRouter();

  return (
    <>
      <IconButton
        icon={mdiChevronLeft}
        size={1.5}
        onClick={() => router.back()}
        style={{ marginTop: 20, marginLeft: 10 }}
      />
      <ProfileSongsContainer artist={artist} songs={songs} />
    </>
  );
};

export default Artist;
