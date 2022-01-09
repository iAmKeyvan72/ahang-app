const singleTracksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SINGLE_TRACKS_LIST': {
      return {
        ...state,
        singleTracksList: action.payload,
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
