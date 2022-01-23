import React, { useContext } from 'react';
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
import { TrackContext } from '../../../../../Contexts/TracksContext';

const SongInfoDlFav = () => {
  const { data: track, isLoading } = useContext(TrackContext);

  const { enName, artistsEnList, liked } = track;
  return (
    <div className={classes.songInfoDlFav}>
      <IconButton
        icon={mdiCloudDownloadOutline}
        onClick={() => console.log('download clicked')}
      />
      <div className={classes.songInfo}>
        <h1>
          <Anchor href="#" title={enName}>
            <BigText>{enName}</BigText>
          </Anchor>
          <div className={classes.artistsLink}>
            {artistsEnList.map((artist, index) => {
              return (
                <React.Fragment key={artist}>
                  <Anchor
                    href={`/artists/${stringToSlug(artist)}`}
                    title={artist}
                  >
                    <NormalText>{artist}</NormalText>
                  </Anchor>
                  {index < artistsEnList.length - 1 ? <span>,</span> : null}
                </React.Fragment>
              );
            })}
          </div>
        </h1>
      </div>
      <IconButton
        icon={liked ? mdiCardsHeart : mdiCardsHeartOutline}
        color={liked ? 'var(--primary-500)' : 'var(--text-300)'}
        onClick={() => console.log('like clicked')}
      />
    </div>
  );
};

export default SongInfoDlFav;
