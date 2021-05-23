import { SET_USER, SET_TOKEN } from "../constants";

function setUser(user) {
  return {
    type: SET_USER,
    user: user,
  };
}
export function setUserToken(token) {
  return {
    type: SET_TOKEN,
    token: token,
  };
}
export default setUser;
