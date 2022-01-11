import React from 'react';

import classes from './AlbumTile.module.css';

import Anchor from '../../Anchor/Anchor';
import BigText from '../../Text/BigText/BigText';
import NormalText from '../../Text/NormalText/NormalText';
import Image from '../../Image/Image';

import { stringToSlug } from '../../../../functions/stringToSlug';

const AlbumTile = ({ album }) => {
  const slug = '/albums/' + stringToSlug(`${album.artist} ${album.name}`);

  return (
    <div className={classes.albumTile}>
      <Anchor href={slug} title={`${album.artist} - ${album.name}`}>
        <div className={classes.albumCover}>
          <Image
            src={album.image}
            alt={`${album.artist} - ${album.name}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={classes.albumCover}>
          <Image
            src={album.image}
            alt={`${album.artist} - ${album.name}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={classes.albumCover}>
          <Image
            src={album.image}
            alt={`${album.artist} - ${album.name}`}
            className="corneredImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </Anchor>
      <Anchor className="boldText" href={slug} title={album.artist}>
        <BigText>{album.artist}</BigText>
      </Anchor>
      <Anchor className="lightText" href={slug} title={album.name}>
        <NormalText>{album.name}</NormalText>
      </Anchor>
    </div>
  );
};

export default AlbumTile;
