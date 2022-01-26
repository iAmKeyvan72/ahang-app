import React from 'react';

import classes from './AlbumTile.module.css';

import Anchor from '../../Anchor/Anchor';
import BigText from '../../Text/BigText/BigText';
import NormalText from '../../Text/NormalText/NormalText';
import Image from '../../Image/Image';

import { stringToSlug } from '../../../../functions/stringToSlug';

const AlbumTile = ({ album }) => {
  const { enName, slug, artistsEnStr, artistsEnList, coverImage } = album;

  return (
    <div className={classes.albumTile}>
      <Anchor href={slug} title={`${artistsEnStr} - ${enName}`}>
        <div className={classes.albumCover}>
          <Image
            src={coverImage}
            alt={`${artistsEnStr} - ${enName}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={classes.albumCover}>
          <Image
            src={coverImage}
            alt={`${artistsEnStr} - ${enName}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={classes.albumCover}>
          <Image
            src={coverImage}
            alt={`${artistsEnStr} - ${enName}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </Anchor>
      <Anchor className="boldText" href={slug} title={artistsEnStr}>
        <BigText>{artistsEnStr}</BigText>
      </Anchor>
      <Anchor className="lightText" href={slug} title={enName}>
        <NormalText>{enName}</NormalText>
      </Anchor>
    </div>
  );
};

export default AlbumTile;
