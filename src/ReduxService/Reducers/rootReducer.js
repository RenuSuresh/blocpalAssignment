import { combineReducers } from "redux";
import setUserReducer from "./setUserReducer";
import setPlaylistReducer from "./setPlaylistReducer";

const rootReducer = combineReducers({
  setUserReducer,
  setPlaylistReducer,
});

export default rootReducer;
