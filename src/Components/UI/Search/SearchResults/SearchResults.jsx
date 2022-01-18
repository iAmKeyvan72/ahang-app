import React, { useContext } from 'react';

import classes from './SearchResults.module.css';

import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import PostTile from '../../Shared/Tiles/PostTile/PostTile';
import HorizontalCarousel from '../../Shared/HorizontalCarousel/HorizontalCarousel';
import ArtistTile from '../../Shared/Tiles/ArtistTile/ArtistTile';

import { SearchContext } from '../../../../Contexts/SearchContext';

const SearchResults = () => {
  const { data: results, isLoading } = useContext(SearchContext);

  const sliderConfig = {
    breakpoints: {
      '(min-width: 500px)': {
        slides: {
          perView: 4.5,
          spacing: 10,
        },
      },
      '(min-width: 700px)': {
        slides: {
          perView: 5.5,
          spacing: 15,
        },
      },
      '(min-width: 850px)': {
        slides: {
          perView: 7.5,
          spacing: 20,
        },
      },
      '(min-width: 1200px)': {
        slides: {
          perView: 10.5,
          spacing: 20,
        },
      },
    },
    slides: {
      perView: 3.3,
      spacing: 20,
    },
  };

  const artists = [
    {
      id: 0,
      faName: 'بهنام بانی',
      enName: 'Behnam Bani',
      image: '/images/temp/artists/Behnam Bani.jpg',
      slug: '/artists/behnam-bani',
    },
    {
      id: 1,
      faName: 'علی یاسینی',
      enName: 'Ali Yasini',
      image: '/images/temp/artists/Ali Yasini.jpg',
      slug: '/artists/ali-yasini',
    },
    {
      id: 2,
      faName: 'سحر',
      enName: 'Sahar',
      image: '/images/temp/artists/Sahar.jpg',
      slug: '/artists/sahar',
    },
    {
      id: 3,
      faName: 'سیروان خسروی',
      enName: 'Sirvan Khosravi',
      image: '/images/temp/artists/Sirvan Khosravi.jpg',
      slug: '/artists/sirvan-khosravi',
    },
    {
      id: 4,
      faName: 'ماکان بند',
      enName: 'Macan Band',
      image: '/images/temp/artists/Macan Band.jpg',
      slug: '/artists/macan-band',
    },
    {
      id: 5,
      faName: 'محسن یگانه',
      enName: 'Mohsen Yeganeh',
      image: '/images/temp/artists/Mohsen Yeganeh.jpg',
      slug: '/artists/mohsen-yeganeh',
    },
    {
      id: 6,
      faName: 'شهاب تیام',
      enName: 'Shahab Tiam',
      image: '/images/temp/artists/Shahab Tiam.jpg',
      slug: '/artists/shahab-tiam',
    },
  ];

  return (
    <div className={classes.searchResultsContainer}>
      <div className={classes.trackResultsContainer}>
        <div>
          <HeaderTitle>Artists</HeaderTitle>
          <div className={classes.artistsList}>
            <HorizontalCarousel sliderConfig={sliderConfig}>
              {artists.map((artist) => (
                <div className="keen-slider__slide" key={artist.id}>
                  <ArtistTile artist={artist} />
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
        <HeaderTitle>Tracks</HeaderTitle>
        <div className={classes.postsList}>
          {results.slice(0, 5).map((post) => (
            <PostTile post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
