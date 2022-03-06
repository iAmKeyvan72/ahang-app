import React, { useState } from 'react';

import classes from './NextUpListContainer.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import RowPost from '../../Shared/RowPost/RowPost';
import { motion } from 'framer-motion';
import {
  rowItemsVariants,
  staggerVariants,
} from '../../../../Animations/animations';
import { Reorder } from 'framer-motion';
import { mdiDrag } from '@mdi/js';
import { useNextTracks } from '../../../../hooks/useTracksContainer';

const NextUpListContainer = ({ trackId }) => {
  // const [nextUps, setNextUps] = useState(posts);

  const { data, isLoading } = useNextTracks(trackId);

  return <div>next ups</div>;

  return (
    <div className={classes.nextUpSongsContainer}>
      <HeaderTitle>Next Up</HeaderTitle>
      <Reorder.Group
        axis="y"
        variants={staggerVariants}
        initial="initial"
        animate="animate"
        values={nextUps}
        onReorder={setNextUps}
      >
        {nextUps.map((nextUp) => (
          <Reorder.Item
            key={nextUp.id}
            variants={rowItemsVariants}
            whileDrag="drag"
            value={nextUp}
          >
            <RowPost post={nextUp} icon={mdiDrag} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default NextUpListContainer;
