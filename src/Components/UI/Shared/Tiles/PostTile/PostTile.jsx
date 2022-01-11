import React from 'react';

import classes from './PostTile.module.css';

import Anchor from '../../Anchor/Anchor';
import Image from '../../Image/Image';
import BigText from '../../Text/BigText/BigText';
import NormalText from '../../Text/NormalText/NormalText';

import { stringToSlug } from '../../../../functions/stringToSlug';

const PostTile = ({ post }) => {
  const { coverImage, enName, artistsEnList, slug } = post;
  const artistsString = artistsEnList.join(' & ');

  return (
    <div className={classes.container}>
      <div className={classes.PostTile}>
        <div className={classes.coverContainer}>
          <Anchor href={slug} title={`${artistsString} - ${enName}`}>
            <Image
              className="corneredImage"
              src={coverImage}
              alt={`${artistsString} - ${enName}`}
              width={300}
              height={300}
            />
          </Anchor>
        </div>
        <Anchor href={slug} title={enName} bold>
          <BigText>{enName}</BigText>
        </Anchor>
        {artistsEnList.map((artist) => (
          <Anchor
            key={artist}
            href={'/artists/' + stringToSlug(`${artist}`)}
            title={artist}
          >
            <NormalText>{artist}</NormalText>
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default PostTile;
