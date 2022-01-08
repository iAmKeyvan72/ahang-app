import React from 'react';

import classes from './NextUpListContainer.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';

const NextUpListContainer = (props) => {
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

  return (
    <div className={classes.nextUpSongsContainer}>
      <HeaderTitle>Next Up</HeaderTitle>
      <ul className="songsList">
        {posts.map((post) => (
          <li key={post.id}>
            <RowPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextUpListContainer;
