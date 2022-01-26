import config from '../../../../config.json';

import React from 'react';
import { motion } from 'framer-motion';

import classes from './PlaylistsHorizontal.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';
import { useSpecialPlaylists } from '../../../../hooks/usePlaylistsContainer';

const PlaylistsHorizontal = () => {
  const { renderedData: playlists, isLoading } = useSpecialPlaylists();

  return (
    <section className={classes.playlistsHorizontal}>
      <HeaderTitle>Most Popular Playlists</HeaderTitle>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <motion.div>
          <HorizontalCarousel
            sliderConfig={config.sliders.homeFeaturedPlaylists}
          >
            {playlists.map((playlist) => (
              <motion.div className="keen-slider__slide" key={playlist.id}>
                <PlaylistContainer playlist={playlist} />
              </motion.div>
            ))}
          </HorizontalCarousel>
        </motion.div>
      )}
    </section>
  );
};

export default PlaylistsHorizontal;
