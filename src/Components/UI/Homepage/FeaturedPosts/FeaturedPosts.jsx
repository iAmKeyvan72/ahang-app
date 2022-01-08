import React from 'react';

import classes from './FeaturedPosts.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import SquarePost from './SquarePost/SquarePost';

const FeaturedPosts = (props) => {
  const posts = [
    {
      id: 0,
      artist: 'Behnam Bani',
      name: 'Akhmato Va Kon',
      image: '/images/temp/singles/Behnam Bani Akhmato Va Kon.jpg',
      url: '#',
    },
    {
      id: 1,
      artist: 'Ali Yasini',
      name: 'Cheraghooni',
      image: '/images/temp/singles/Ali Yasini - Cheraghooni.jpg',
      url: '#',
    },
    {
      id: 2,
      artist: 'Ashvan',
      name: 'Sheyda',
      image: '/images/temp/singles/Ashvan Sheyda.jpg',
      url: '#',
    },
  ];

  return (
    <section className={classes.featuredPosts}>
      <HeaderTitle>Featured</HeaderTitle>
      <ul className={classes.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <SquarePost post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedPosts;
