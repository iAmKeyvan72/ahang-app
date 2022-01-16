import config from '../config.json';

import { useReducer, useEffect } from 'react';
import axios from 'axios';

import singleTracksReducer from '../reducers/singleTracksReducer';

const useSingleTracksController = () => {
  const [{ isLoading, singleTracksList, hasError, error }, dispatch] =
    useReducer(singleTracksReducer, {
      isLoading: true,
      singleTracksList: [],
      hasError: false,
      error: '',
    });

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const result = await axios.get(url);
        dispatch({
          type: 'SET_SINGLE_TRACKS_LIST',
          payload: result.data,
        });
      } catch (error) {
        dispatch({
          type: 'ERRORED',
          payload: error,
        });
      }
    };
    fetchData(process.env.REACT_APP_TRACKS_LATEST);
  }, []);

  return { isLoading, singleTracksList, hasError, error };
};

export default useSingleTracksController;
