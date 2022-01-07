import React from 'react';

import classes from './TopHomeFeaturePost.module.css';

import Image from '../Image/Image';
import Anchor from '../Anchor/Anchor';
import BigText from '../BigText/BigText';
import NormalText from '../NormalText/NormalText';

const TopHomeFeaturePost = ({ post }) => {
  return (
    <div className={classes.mostPopularContainer}>
      <div
        style={{
          position: 'relative',
          minHeight: 200,
          marginBottom: 10,
        }}
      >
        <Anchor href={post.url} title={`${post.artist} - ${post.song}`}>
          <Image
            className="corneredImage"
            src={post.image}
            alt={`${post.artist} - ${post.song}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Anchor>
      </div>
      <Anchor href={post.url} title={post.song}>
        <BigText weight="bold">{post.song}</BigText>
      </Anchor>
      <Anchor href={post.url} title={post.artist}>
        <NormalText>{post.artist}</NormalText>
      </Anchor>
    </div>
  );
};

export default TopHomeFeaturePost;
