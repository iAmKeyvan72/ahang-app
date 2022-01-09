import { stringToSlug } from '../Components/functions/stringToSlug';

const trackListBuilder = (list) => {
  let finalTrackList = [];
  list.map((track) => {
    const artistsString = decodeURI(track.acf.link_320)
      .split('/')[2]
      .split(' - ')[0];

    let newTrackObj = {
      id: track.id,
      faName: track.acf.title_fa,
      enName: track.acf.title_en,
      coverImage: track.acf.original_cover.url,
      link320: track.acf.link_320,
      link128: track.acf.link_128,
      videoUrl: track.acf.video_post,
      artistsFaList: [],
      artistsEnList: artistsString.split(' & '),
      slug:
        '/singles/' + stringToSlug(`${artistsString} ${track.acf.title_en}`),
      liked: false,
    };
    finalTrackList.push(newTrackObj);
  });

  return finalTrackList;
};

const singleTracksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SINGLE_TRACKS_LIST': {
      const trackList = trackListBuilder(action.payload);

      return {
        ...state,
        singleTracksList: trackList,
        isLoading: false,
        hasError: false,
      };
    }

    case 'ERRORED': {
      return {
        ...state,
        hasError: true,
        error: action.payload,
      };
    }
    default:
      break;
  }
};

export default singleTracksReducer;
