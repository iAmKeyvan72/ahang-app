import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';
import { stringToSlug } from '../Components/functions/stringToSlug';

export const useLatestAlbums = () => {
  return useQuery('latestAlbums', api.getLatestAlbums);
};

export const useSpecialAlbums = () => {
  const initialSpecialAlbums = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery('SpecialAlbums', api.getSpecialAlbums, {
    initialData: initialSpecialAlbums,
  });

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  renderedData = data.map((post) => {
    artistsEnStr = decodeURI(post.acf.link_320).split('/')[2].split(' - ')[0];
    artistsEnList = artistsEnStr.split(' & ');

    slug = '/albums/' + stringToSlug(`${artistsEnStr} ${post.acf.title_en}`);

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

export const useAlbum = (id) => {
  return useQuery(['album', id], api.getAlbum);
};
