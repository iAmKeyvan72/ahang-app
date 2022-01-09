import React from 'react';

import classes from './RowPost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../Text/BigText/BigText';
import NormalText from '../Text/NormalText/NormalText';

import { stringToSlug } from '../../../functions/stringToSlug';

const RowPost = ({ post, hasBackground }) => {
  const { enName, coverImage, artistsEnList, slug } = post;

  const artistsString = artistsEnList.join(' & ');

  return (
    <div
      className={`${classes.rowPost} ${classes.rowSongs} ${
        hasBackground ? classes.hasBackground : null
      }`}
    >
      <Anchor href={slug} title={`${artistsString} - ${enName}`}>
        <Image
          src={coverImage}
          alt={`${artistsString} - ${enName}`}
          className="corneredImage"
          layout="responsive"
          width={80}
          height={80}
        />
      </Anchor>
      <div className="songInfo">
        <Anchor href={slug} className="boldText" title={enName}>
          <BigText>{enName}</BigText>
        </Anchor>
        {artistsEnList.map((artist) => (
          <Anchor
            key={artist}
            href={'/artists/' + stringToSlug(artist)}
            className="lightText"
            title={artist}
          >
            <NormalText>{artist}</NormalText>
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default RowPost;
