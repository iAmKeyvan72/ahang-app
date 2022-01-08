import React from 'react';

import classes from './SquarePost.module.css';

import Anchor from '../../../Shared/Anchor/Anchor';
import Image from '../../../Shared/Image/Image';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';

const SquarePost = ({ post }) => {
  return (
    <div className={classes.squarePost}>
      <div className={classes.coverContainer}>
        <Anchor href={post.url} title={`${post.artist} ${post.name}`}>
          <Image
            className="corneredImage"
            src={post.image}
            alt={`${post.artist} ${post.name}`}
            width={300}
            height={300}
          />
        </Anchor>
      </div>
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
