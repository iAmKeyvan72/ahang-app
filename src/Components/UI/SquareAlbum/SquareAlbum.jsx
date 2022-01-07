import React from 'react';
import Anchor from '../Anchor/Anchor';
import BigText from '../BigText/BigText';
import Image from '../Image/Image';
import NormalText from '../NormalText/NormalText';

import classes from './SquareAlbum.module.css';

const SquareAlbum = ({ album }) => {
  return (
    <div className={classes.albumTile}>
      <Anchor href="#" title={`${album.artist} - ${album.name}`}>
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
      <Anchor className="boldText" href="#" title={album.artist}>
        <BigText>{album.artist}</BigText>
      </Anchor>
      <Anchor className="lightText" href="#" title={album.name}>
        <NormalText>{album.name}</NormalText>
      </Anchor>
    </div>
  );
};

export default SquareAlbum;
