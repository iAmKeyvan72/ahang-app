import React from 'react';

import classes from './SquarePost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../BigText/BigText';
import NormalText from '../NormalText/NormalText';

const SquarePost = ({ post }) => {
  return (
    <div className={classes.squarePost}>
      <Anchor href={post.url} title={`${post.artist} ${post.name}`}>
        <Image
          className="corneredImage"
          src={post.image}
          alt={`${post.artist} ${post.name}`}
          width={300}
          height={300}
        />
      </Anchor>
      <Anchor href={post.url} title={post.name} bold>
        <BigText>{post.name}</BigText>
      </Anchor>
      <Anchor href={post.url} title={post.artist}>
        <NormalText>{post.artist}</NormalText>
      </Anchor>
    </div>
  );
};

export default SquarePost;
