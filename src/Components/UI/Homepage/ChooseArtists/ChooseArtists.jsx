import React from 'react';

import classes from './ChooseArtists.module.css';

import Image from '../../Shared/Image/Image';
import BigText from '../../Shared/Text/BigText/BigText';
import NormalText from '../../Shared/Text/NormalText/NormalText';
import Anchor from '../../Shared/Anchor/Anchor';

const ChooseArtists = (props) => {
  const artists = [
    {
      id: 0,
      name: 'Behnam Safari',
      image: '/images/temp/artists/Behnam Safavi.jpg',
    },
    {
      id: 1,
      name: 'Sogand',
      image: '/images/temp/artists/Sogand.jpg',
    },
    {
      id: 2,
      name: 'Behnam Bani',
      image: '/images/temp/artists/Behnam Bani.jpg',
    },
    {
      id: 3,
      name: 'Ali Yasini',
      image: '/images/temp/artists/Ali Yasini.jpg',
    },
    {
      id: 4,
      name: 'Sirvan Khosravi',
      image: '/images/temp/artists/Sirvan Khosravi.jpg',
    },
  ];

  return (
    <section className={classes.chooseArtists}>
      <div className={classes.groupArtists}>
        {artists.map((artist) => (
          <Image
            key={artist.id}
            src={artist.image}
            alt={artist.name}
            className="circleImage"
            width={80}
            height={80}
          />
        ))}
      </div>

      <div className={classes.marginVertical}>
        <BigText weight="bold">Choose your beloved artists</BigText>
        <NormalText>we will provide a unique experience for you</NormalText>
      </div>
      <Anchor href="#" className="btn secondary curvedBtn">
        Choose Your Artists
      </Anchor>
    </section>
  );
};

export default ChooseArtists;
