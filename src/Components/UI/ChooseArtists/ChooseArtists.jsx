import React from 'react';

import classes from './ChooseArtists.module.css';

import Image from '../Image/Image';
import BigText from '../BigText/BigText';
import NormalText from '../NormalText/NormalText';
import Anchor from '../Anchor/Anchor';

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
        <p>
          <BigText weight="bold">Choose your beloved artists</BigText>
        </p>
        <NormalText>we will provide a unique experience for you</NormalText>
      </div>
      <Anchor href="#" className="btn secondary curvedBtn">
        Choose Your Artists
      </Anchor>
    </section>
  );
};

export default ChooseArtists;
