import React from 'react';

import classes from './RowPost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../BigText/BigText';
import NormalText from '../NormalText/NormalText';

const RowPost = ({ post }) => {
  return (
    <div className={`${classes.rowPost} ${classes.rowSongs}`}>
      <Anchor href={post.url} title={`${post.artist} - ${post.song}`}>
        <Image
          src={post.image}
          alt={`${post.artist} - ${post.song}`}
          className="corneredImage"
          layout="responsive"
          width={80}
          height={80}
        />
      </Anchor>
      <div className="songInfo">
        <Anchor href={post.url} className="boldText" title={post.song}>
          <BigText>{post.song}</BigText>
        </Anchor>
        <Anchor href={post.url} className="lightText" title={post.artist}>
          <NormalText>{post.artist}</NormalText>
        </Anchor>
      </div>
    </div>
  );
};

export default RowPost;
