import React from 'react';

import classes from './SongInfoDlFav.module.css';

import LikeButton from '../../../Shared/Button/LikeButton/LikeButton';
import DownloadButton from '../../../Shared/Button/DownloadButton/DownloadButton';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';
import Anchor from '../../../Shared/Anchor/Anchor';

import { stringToSlug } from '../../../../functions/stringToSlug';

const SongInfoDlFav = ({ post }) => {
  return (
    <div className={classes.songInfoDlFav}>
      <DownloadButton />
      <div className={classes.songInfo}>
        <h1>
          <Anchor href="#" title={post.enName}>
            <BigText>{post.enName}</BigText>
          </Anchor>
          <div className={classes.artistsLink}>
            {post.artists.map((artist, index) => {
              return (
                <>
                  <Anchor
                    key={artist.id}
                    href={`/artists/${stringToSlug(artist.enName)}`}
                    title={artist.enName}
                  >
                    <NormalText>{artist.enName}</NormalText>
                  </Anchor>
                  {index < post.artists.length - 1 ? <span>,</span> : null}
                </>
              );
            })}
          </div>
        </h1>
      </div>
      <LikeButton />
    </div>
  );
};

export default SongInfoDlFav;
