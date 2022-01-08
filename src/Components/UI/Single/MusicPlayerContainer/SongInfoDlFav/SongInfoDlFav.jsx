import React from 'react';
import {
  mdiCardsHeartOutline,
  mdiCardsHeart,
  mdiCloudDownloadOutline,
} from '@mdi/js';

import classes from './SongInfoDlFav.module.css';

import IconButton from '../../../Shared/Button/IconButton/IconButton';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';
import Anchor from '../../../Shared/Anchor/Anchor';

import { stringToSlug } from '../../../../functions/stringToSlug';

const SongInfoDlFav = ({ post }) => {
  return (
    <div className={classes.songInfoDlFav}>
      <IconButton
        icon={mdiCloudDownloadOutline}
        onClick={() => console.log('download clicked')}
      />
      <div className={classes.songInfo}>
        <h1>
          <Anchor href="#" title={post.enName}>
            <BigText>{post.enName}</BigText>
          </Anchor>
          <div className={classes.artistsLink}>
            {post.artists.map((artist, index) => {
              return (
                <React.Fragment key={artist.id}>
                  <Anchor
                    href={`/artists/${stringToSlug(artist.enName)}`}
                    title={artist.enName}
                  >
                    <NormalText>{artist.enName}</NormalText>
                  </Anchor>
                  {index < post.artists.length - 1 ? <span>,</span> : null}
                </React.Fragment>
              );
            })}
          </div>
        </h1>
      </div>
      <IconButton
        icon={post.liked ? mdiCardsHeart : mdiCardsHeartOutline}
        color={post.liked ? 'var(--primary-500)' : 'var(--text-300)'}
        onClick={() => console.log('like clicked')}
      />
    </div>
  );
};

export default SongInfoDlFav;
