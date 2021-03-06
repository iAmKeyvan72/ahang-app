import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

import classes from './ArtistsModal.module.css';

import Modal from '../../../../Shared/Modal/Modal';
import Anchor from '../../../../Shared/Anchor/Anchor';
import BigText from '../../../../Shared/Text/BigText/BigText';

import { stringToSlug } from '../../../../../functions/stringToSlug';

const ArtistsModal = ({ artists, close }) => {
  return (
    <Modal title="Artists" close={close}>
      {artists.map((artist) => (
        <Anchor href={'/artists/' + stringToSlug(`${artist}`)} key={artist}>
          <div className={classes.artistContainer}>
            <BigText style={{ color: 'var(--text-300)' }}>{artist}</BigText>
            <Icon path={mdiChevronRight} size={1.1} color="var(--text-300)" />
          </div>
        </Anchor>
      ))}
    </Modal>
  );
};

export default ArtistsModal;
