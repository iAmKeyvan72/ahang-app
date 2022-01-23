import React, { useContext } from 'react';
import { mdiCardsHeartOutline, mdiCardsHeart } from '@mdi/js';

import classes from './ProfileContainer.module.css';

import DynamicShadowImage from '../../../Shared/DynamicShadowImage/DynamicShadowImage';
import Anchor from '../../../Shared/Anchor/Anchor';
import IconButton from '../../../Shared/Button/IconButton/IconButton';
import BigText from '../../../Shared/Text/BigText/BigText';
import NormalText from '../../../Shared/Text/NormalText/NormalText';

import { stringToSlug } from '../../../../functions/stringToSlug';
import { ArtistContext } from '../../../../../Contexts/ArtistsContext';

const ProfileContainer = () => {
  const { data: artist, isLoading } = useContext(ArtistContext);

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileImageContainer}>
        <DynamicShadowImage
          src={artist.image}
          layout="responsive"
          width={400}
          height={400}
        />
      </div>
      <div className={classes.artistInfoFav}>
        <div className={classes.artistInfo}>
          <h1>
            <Anchor
              href={`/artists/${stringToSlug(artist.enName)}`}
              title={artist.enName}
            >
              <BigText>{artist.enName}</BigText>
            </Anchor>
          </h1>
          <NormalText>{artist.totalSongs} Songs</NormalText>
        </div>
        <IconButton
          icon={artist.followed ? mdiCardsHeart : mdiCardsHeartOutline}
          color={artist.followed ? 'var(--primary-500)' : 'var(--text-300)'}
          onClick={() => console.log('like clicked')}
        />
      </div>
      <div className="playerController">Here is controller</div>
    </div>
  );
};

export default ProfileContainer;
