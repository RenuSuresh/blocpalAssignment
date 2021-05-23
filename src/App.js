import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromResponse } from "./spotifyService/spotify";
import Playlist from "./components/Playlist/Playlist";
import SpotifyWebApi from "spotify-web-api-js";
import { useSelector, useDispatch } from "react-redux";
import setUser, { setUserToken } from "./ReduxService/Action/setUser";
const spotify = new SpotifyWebApi();

function App() {
  const getToken = sessionStorage.getItem("token");

  const [token, setToken] = useState(JSON.parse(getToken));
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    dispatch(setUserToken(token));

    if (_token && !getToken) {
      sessionStorage.setItem("token", JSON.stringify(_token));
      setToken(_token);
      // giving access token to the spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(setUser(user));
        dispatch(setUserToken(_token));
      });
    }
  }, []);

  return <div className="App">{token ? <Playlist /> : <Login />}</div>;
}

export default App;
