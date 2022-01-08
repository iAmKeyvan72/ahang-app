import React from 'react';

import classes from './RowPost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../Text/BigText/BigText';
import NormalText from '../Text/NormalText/NormalText';

import { stringToSlug } from '../../../functions/stringToSlug';

const RowPost = ({ post, hasBackground }) => {
  const slug = '/singles/' + stringToSlug(`${post.artist} ${post.song}`);

  return (
    <div
      className={`${classes.rowPost} ${classes.rowSongs} ${
        hasBackground ? classes.hasBackground : null
      }`}
    >
      <Anchor href={slug} title={`${post.artist} - ${post.song}`}>
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
        <Anchor href={slug} className="boldText" title={post.song}>
          <BigText>{post.song}</BigText>
        </Anchor>
        <Anchor href={slug} className="lightText" title={post.artist}>
          <NormalText>{post.artist}</NormalText>
        </Anchor>
      </div>
    </div>
  );
};

export default RowPost;
