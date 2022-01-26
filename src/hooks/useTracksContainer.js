import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';
import { stringToSlug } from '../Components/functions/stringToSlug';

export const useLatestTracks = () => {
  const initialLatestTracks = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery('latestTracks', api.getLatestTracks, {
    initialData: initialLatestTracks,
  });

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    artistsEnStr = decodeURI(post.acf.link_320).split('/')[2].split(' - ')[0];
    artistsEnList = artistsEnStr.split(' & ');

    slug = '/tracks/' + stringToSlug(`${artistsEnStr} ${post.acf.title_en}`);

    return {
      id: post.id,
      enName: post.acf.title_en,
      coverImage: post.acf.original_cover.sizes.medium_large,
      artistsEnList,
      artistsEnStr,
      slug,
    };
  });

  return { renderedData, isLoading };
};

export const useSuggestionTracks = () => {
  const initialSuggestionTracks = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery(
    'suggestionTracks',
    api.getSuggestionTracks,
    {
      initialData: initialSuggestionTracks,
    }
  );

  let renderedData, artistsEnStr, artistsEnList, slug;
  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    artistsEnStr = decodeURI(post.acf.link_320).split('/')[2].split(' - ')[0];
    artistsEnList = artistsEnStr.split(' & ');

    slug = '/tracks/' + stringToSlug(`${artistsEnStr} ${post.acf.title_en}`);

    return {
      id: post.id,
      enName: post.acf.title_en,
      coverImage: post.acf.original_cover.sizes.medium_large,
      artistsEnList,
      artistsEnStr,
      slug,
    };
  });

  return { renderedData, isLoading };
};

export const useTrack = (id) => {
  return useQuery(['track', id], api.getTrack);
};

export const useNextTracks = (id) => {
  return useQuery(['nextTracks', id, api.getNextTracks]);
};
