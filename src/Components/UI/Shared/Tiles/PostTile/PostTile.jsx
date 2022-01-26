import React from 'react';
import { motion } from 'framer-motion';

import classes from './PostTile.module.css';

import Anchor from '../../Anchor/Anchor';
import Image from '../../Image/Image';
import BigText from '../../Text/BigText/BigText';
import NormalText from '../../Text/NormalText/NormalText';

import { stringToSlug } from '../../../../functions/stringToSlug';
import { tileVariants } from '../../../../../Animations/animations';

const PostTile = ({ post }) => {
  const { coverImage, enName, artistsEnList, artistsString, slug } = post;

  return (
    <motion.div
      variants={tileVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      className={classes.container}
    >
      <motion.div className={classes.PostTile}>
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
      </motion.div>
    </motion.div>
  );
};

export default PostTile;
