import React from 'react';

import classes from './TopHomeFeaturePost.module.css';

import Image from '../../../Shared/Image/Image';
import Anchor from '../../../Shared/Anchor/Anchor';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';

import { stringToSlug } from '../../../../functions/stringToSlug';

const TopHomeFeaturePost = ({ post }) => {
  const {
    acf: {
      title_en: songEn,
      link_320,
      original_cover: { url: image },
    },
  } = post;

  const artistsEnStr = decodeURI(link_320).split('/')[2].split(' - ')[0];

  const postPermalink = '/singles/' + stringToSlug(`${artistsEnStr} ${songEn}`);

  return (
    <div className={classes.mostPopularContainer}>
      <div
        style={{
          position: 'relative',
          minHeight: 200,
          marginBottom: 10,
        }}
      >
        <Anchor href={postPermalink} title={`${artistsEnStr} - ${songEn}`}>
          <Image
            className="corneredImage"
            src={image}
            alt={`${artistsEnStr} - ${songEn}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Anchor>
      </div>
      <Anchor href={postPermalink} title={songEn}>
        <BigText weight="bold">{songEn}</BigText>
      </Anchor>
      <Anchor href={postPermalink} title={artistsEnStr}>
        <NormalText>{artistsEnStr}</NormalText>
      </Anchor>
    </div>
  );
};

export default TopHomeFeaturePost;
