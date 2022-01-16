import React from 'react';

import classes from './RowPost.module.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import BigText from '../Text/BigText/BigText';
import NormalText from '../Text/NormalText/NormalText';

import { stringToSlug } from '../../../functions/stringToSlug';
import { motion } from 'framer-motion';
import { rowItemsVariants } from '../../../../Animations/animations';
import Icon from '@mdi/react';

const RowPost = React.forwardRef((props, ref) => {
  const { enName, coverImage, artistsEnList, slug } = props.post;

  const artistsString = artistsEnList.join(' & ');

  return (
    <div
      ref={ref}
      className={`${classes.rowPost} ${classes.rowSongs} ${
        props.hasBackground ? classes.hasBackground : null
      }`}
    >
      <Anchor href={slug} title={`${artistsString} - ${enName}`}>
        <Image
          src={coverImage}
          alt={`${artistsString} - ${enName}`}
          className="corneredImage"
          // layout="responsive"
          width={80}
          height={80}
        />
      </Anchor>
      <div className={classes.songInfo}>
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
      {props.icon && (
        <div className={classes.dragMe}>
          <Icon path={props.icon} size={1.1} color="var(--text-300)" />
        </div>
      )}
    </div>
  );
});

const MotionedRowPost = motion(RowPost);

export default MotionedRowPost;
