import React from 'react';

import classes from './ArtistTile.module.css';

import Anchor from '../../Anchor/Anchor';
import Image from '../../Image/Image';
import NormalText from '../../Text/NormalText/NormalText';

const ArtistTile = ({ artist: { slug, enName, image } }) => {
  return (
    <div className={classes.container}>
      <Anchor href={slug} title={enName}>
        <Image
          src={image}
          alt={enName}
          width={80}
          height={80}
          className="circleImage"
        />
      </Anchor>
      <Anchor href={slug} title={enName}>
        <NormalText>{enName}</NormalText>
      </Anchor>
    </div>
  );
};

export default ArtistTile;
