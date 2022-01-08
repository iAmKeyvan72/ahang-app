import React from 'react';

import classes from './SquarePost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../Text/BigText/BigText';
import NormalText from '../Text/NormalText/NormalText';

import { stringToSlug } from '../../../functions/stringToSlug';

const SquarePost = ({ post }) => {
  return (
    <div className={classes.squarePost}>
      <div className={classes.coverContainer}>
        <Anchor
          href={'/singles/' + stringToSlug(`${post.artist} ${post.name}`)}
          title={`${post.artist} ${post.name}`}
        >
          <Image
            className="corneredImage"
            src={post.image}
            alt={`${post.artist} ${post.name}`}
            width={300}
            height={300}
          />
        </Anchor>
      </div>
      <Anchor
        href={'/singles/' + stringToSlug(`${post.artist} ${post.name}`)}
        title={post.name}
        bold
      >
        <BigText>{post.name}</BigText>
      </Anchor>
      <Anchor
        href={'/artists/' + stringToSlug(`${post.artist}`)}
        title={post.artist}
      >
        <NormalText>{post.artist}</NormalText>
      </Anchor>
    </div>
  );
};

export default SquarePost;
