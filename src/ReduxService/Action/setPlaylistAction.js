import { SET_PLAYLIST, SET_LOCAL_PLAYLIST } from "../constants";

function setPlaylistAction(playlist) {
  return {
    type: SET_PLAYLIST,
    playlist: playlist,
  };
}
export function setLocalPlaylistAction(playlist) {
  return {
    type: SET_LOCAL_PLAYLIST,
    playlist: playlist,
  };
}

export default setPlaylistAction;
