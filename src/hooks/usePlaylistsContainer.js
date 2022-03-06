import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';
import { stringToSlug } from '../Components/functions/stringToSlug';

export const useLatestPlaylists = () => {
  return useQuery('latestPlaylists', api.getLatestPlaylists);
};

export const useSpecialPlaylists = () => {
  // const initialSpecialPlaylists = useContext(InitialHomepageDataContext);
  // const { data, isLoading } = useQuery(
  //   'specialPlaylists',
  //   api.getSpecialPlaylists,
  //   { initialData: initialSpecialPlaylists }
  // );

  const { data, isLoading } = useQuery(
    'specialPlaylists',
    api.getSpecialPlaylists
  );

  let renderedData;

  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    return {
      id: post.id,
      enName: post.acf_fields.title_en,
      coverImage: post.acf_fields.original_cover.sizes.medium_large,
      slug: '/playlists/' + stringToSlug(post.acf_fields.title_en),
    };
  });

  return { renderedData, isLoading };
};

export const usePlaylist = (id) => {
  return useQuery(['playlist', id], api.getPlaylist);
};
