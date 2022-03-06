import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';
import { stringToSlug } from '../Components/functions/stringToSlug';

export const useLatestTracks = () => {
  const { initialLatestTracks } = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery('latestTracks', api.getLatestTracks, {
    initialData: initialLatestTracks,
  });

  // const { data, isLoading } = useQuery('latestTracks', api.getLatestTracks);

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    artistsEnStr = decodeURI(post.acf_fields.link_320)
      .split('/')[2]
      .split(' - ')[0];
    artistsEnList = artistsEnStr.split(' & ');

    // slug = '/tracks/' + stringToSlug(`${artistsEnStr} ${post.acf_fields.title_en}`);
    slug = '/tracks/' + post.id;

    return {
      id: post.id,
      enName: post.acf_fields.title_en,
      coverImage: post.acf_fields.original_cover.sizes.medium_large,
      artistsEnList,
      artistsEnStr,
      slug,
    };
  });

  return { renderedData, isLoading };
};

export const useSuggestionTracks = () => {
  const { initialSuggestionTracks } = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery(
    'suggestionTracks',
    api.getSuggestionTracks,
    {
      initialData: initialSuggestionTracks,
    }
  );

  // const { data, isLoading } = useQuery(
  //   'suggestionTracks',
  //   api.getSuggestionTracks
  // );

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    artistsEnStr = decodeURI(post.acf_fields.link_320)
      .split('/')[2]
      .split(' - ')[0];
    artistsEnList = artistsEnStr.split(' & ');

    // slug = '/tracks/' + stringToSlug(`${artistsEnStr} ${post.acf_fields.title_en}`);
    slug = '/tracks/' + post.id;

    return {
      id: post.id,
      enName: post.acf_fields.title_en,
      coverImage: post.acf_fields.original_cover.sizes.medium_large,
      artistsEnList,
      artistsEnStr,
      slug,
    };
  });

  return { renderedData, isLoading };
};

export const useTrack = (id) => {
  // const initialSuggestionTracks = useContext(InitialHomepageDataContext);

  // const { data, isLoading } = useQuery(['track', id], api.getTrack, {
  //   initialData: initialSuggestionTracks,
  // });

  const { data, isLoading } = useQuery(['track', id], () => api.getTrack(id));

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  artistsEnStr = decodeURI(data.acf_fields.link_320)
    .split('/')[2]
    .split(' - ')[0];
  artistsEnList = artistsEnStr.split(' & ');

  // slug = '/tracks/' + stringToSlug(`${artistsEnStr} ${data.acf_fields.title_en}`);
  slug = '/tracks/' + data.id;

  renderedData = {
    id: data.id,
    enName: data.acf_fields.title_en,
    coverImage: data.acf_fields.original_cover.sizes.medium_large,
    artistsEnList,
    artistsEnStr,
    slug,
    liked: false,
  };

  return { renderedData, isLoading };
};

export const useNextTracks = (id) => {
  return useQuery(['nextTracks', id, api.getNextTracks]);
};
