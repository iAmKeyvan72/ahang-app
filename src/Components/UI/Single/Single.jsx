import React from 'react';
import { useRouter } from 'next/router';
import { mdiChevronLeft } from '@mdi/js';

import classes from './Single.module.css';

import MusicPlayerContainer from './MusicPlayerContainer/MusicPlayerContainer';
import NextUpListContainer from './NextUpListContainer/NextUpListContainer';
import IconButton from '../Shared/Button/IconButton/IconButton';

const post = {
  faName: 'بمونی برام',
  enName: 'Bemooni Baram',
  artists: [
    { id: 0, faName: 'رضا صادقی', enName: 'Reza Sadeghi' },
    { id: 1, faName: 'بهنام بانی', enName: 'Behnam Bani' },
  ],
  lyrics: `اون چشات دنیامه نگیریشون ازم
به جون تو قسم دیگه نمیتونم
من دلم آروم نیست بری زبونم لال
با تو یه چند صد سال
میشه که بمونم

قربون خندت برم
میمیرم من واست آخر سرم
هرچی جز تو بودو دور کردم از دور و برم
همه دنیا میدونن من ازت عاشق ترم
آخ که دل میره برات
تو فقط بخند خودم میشم فدات
چشم بد دور شه الهی که دراد
کور بشه هرکی خوشیمونو نخواد

دل من واسه تو میزنه فقط
من که چیزی جز تو نخواستم ازت
بمونی برام کاشکی تا ابد عزیزم
فکر کن من باشم و تو باشی و بارون
حس قدم زدن تو کوچه خیابون
تو بمون من میمیرم جای هردوتامون عزیزم

قربون خندت برم
میمیرم من واست آخر سرم
هرچی جز تو بودو دور کردم از دور و برم
همه دنیا میدونن من ازت عاشق ترم
آخ که دل میره برات
تو فقط بخند خودم میشم فدات
چشم بد دور شه الهی که دراد
کور بشه هرکی خوشیمونو نخواد`,
  coverImage: 'https://musicisho.com/wp-content/uploads/2022/01/47vyLrFT.jpg',
  link320:
    'https://dl.musicisho.com/singles/0010/Reza Sadeghi - Bemooni Baram.mp3',
  link128:
    'https://dl.musicisho.com/singles/0010/Reza Sadeghi - Bemooni Baram [128].mp3',
  videoUrl:
    'https://dl.musicisho.com/videos/0010/Reza Sadeghi - Bemooni Baram.mp4',
  alreadyLiked: false,
};

const Single = (props) => {
  const router = useRouter();

  return (
    <>
      <IconButton
        icon={mdiChevronLeft}
        size={1.5}
        onClick={() => router.back()}
        style={{ marginTop: 50, marginLeft: 30 }}
      />
      <div className={classes.container}>
        <MusicPlayerContainer post={post} />
        <NextUpListContainer />
      </div>
    </>
  );
};

export default Single;
