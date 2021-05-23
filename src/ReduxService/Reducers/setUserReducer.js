import { SET_USER, SET_TOKEN } from "../constants";

const initialState = {
  user: "",
  token: "",
};

function setUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return { ...state };
  }
}
export default setUserReducer;
