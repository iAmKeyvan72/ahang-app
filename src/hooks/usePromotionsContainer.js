import { useContext } from 'react';
import { useQuery } from 'react-query';

import * as api from '../apis/api';

import { InitialHomepageDataContext } from '../../pages';

import { stringToSlug } from '../Components/functions/stringToSlug';

export const usePromotions = () => {
  const { initialPromotions } = useContext(InitialHomepageDataContext);

  const { data, isLoading } = useQuery('promotions', api.getPromotions, {
    initialData: initialPromotions,
  });

  // const { data, isLoading } = useQuery('promotions', api.getPromotions);

  let artistsEnList, artistsEnStr, slug, renderedData;

  if (isLoading) return { renderedData, isLoading };

  console.log('data', data);

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
