const playerReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        url: action.payload.url,
        played: 0,
        loaded: 0,
        pip: false,
      };

    case 'PLAY':
      return {
        ...state,
        playing: true,
      };

    case 'PAUSE':
      return {
        ...state,
        playing: false,
      };

    case 'TOGGLE_PLAY':
      return {
        ...state,
        playing: !state.playing,
      };

    case 'ENABLE_PIP':
      return {
        ...state,
        pip: true,
      };

    case 'DISABLE_PIP':
      return {
        ...state,
        pip: false,
      };

    case 'SEEK_MOUSE_DOWN':
      return {
        ...state,
        seeking: true,
      };

    case 'SEEK_MOUSE_UP':
      return {
        ...state,
        seeking: false,
        playing: true,
      };

    case 'SEEK_CHANGE':
      return {
        ...state,
        played: action.played,
      };

    case 'MOVE_PROGRESS_INDICATOR':
      return {
        ...state,
        played: action.played,
      };

    case 'ENDED':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_DURATION':
      return {
        ...state,
        duration: action.duration,
      };

    default:
      return state;
  }
};

export default playerReducer;
