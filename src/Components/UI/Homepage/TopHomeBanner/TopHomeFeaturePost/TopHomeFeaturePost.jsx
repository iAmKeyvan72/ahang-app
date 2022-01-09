import React from 'react';

import classes from './TopHomeFeaturePost.module.css';

import Image from '../../../Shared/Image/Image';
import Anchor from '../../../Shared/Anchor/Anchor';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';

const TopHomeFeaturePost = ({ post }) => {
  const { enName, coverImage, artistsEnList, slug } = post;

  const artistsEnStr = artistsEnList.join(' & ');

  return (
    <div className={classes.mostPopularContainer}>
      <div
        style={{
          position: 'relative',
          minHeight: 200,
          marginBottom: 10,
        }}
      >
        <Anchor href={slug} title={`${artistsEnStr} - ${enName}`}>
          <Image
            className="corneredImage"
            src={coverImage}
            alt={`${artistsEnStr} - ${enName}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Anchor>
      </div>
      <Anchor href={slug} title={enName}>
        <BigText weight="bold">{enName}</BigText>
      </Anchor>
      <Anchor href={slug} title={artistsEnStr}>
        <NormalText>{artistsEnStr}</NormalText>
      </Anchor>
    </div>
  );
};

export default TopHomeFeaturePost;
