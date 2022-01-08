import React from 'react';

import classes from './SquareAlbum.module.css';

import Anchor from '../../../Shared/Anchor/Anchor';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';
import Image from '../../../Shared/Image/Image';

import { stringToSlug } from '../../../../functions/stringToSlug';

const SquareAlbum = ({ album }) => {
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

export default SquareAlbum;
