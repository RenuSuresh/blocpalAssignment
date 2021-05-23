import { SET_PLAYLIST } from "../constants";

const initialState = {
  playlist: [],
  localPlaylist: [],
};

function setPlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
      };

    default:
      return { ...state };
  }
}

export default setPlaylistReducer;
