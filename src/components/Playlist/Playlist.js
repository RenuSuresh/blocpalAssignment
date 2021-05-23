import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featuredPlaylist } from "../../spotifyService/spotify";
import setPlaylistAction from "../../ReduxService/Action/setPlaylistAction";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./PlaylistMaterialStyle";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Playlist.css";

const localData = sessionStorage.getItem("localPlayList")
  ? JSON.parse(sessionStorage.getItem("localPlayList"))
  : [];

function Playlist() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [draggedItem, setDraggedItem] = useState(localData);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(featuredPlaylist, {
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${state.setUserReducer.token}`,
        },
      })
      .then(
        (response) => {
          dispatch(setPlaylistAction(response.data.playlists));
        },
        (error) => {}
      )
      .catch((error) => {
        console.log("error");
      });
    return () => {};
  }, [state.setUserReducer.token]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const onDropLeft = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    setDraggedItem((arr) => [...arr, JSON.parse(data)]);
  };
  sessionStorage.setItem("localPlayList", JSON.stringify(draggedItem));
  const onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify(v));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
      <h3 className="heading"> Spotify Featured Playlist</h3>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.playlistHeading}
            >
              Spotify featured list
            </Typography>
            <Paper elevation={3} className={classes.paper}>
              {state.setPlaylistReducer.playlist.items &&
                state.setPlaylistReducer.playlist.items.map((playlist) => (
                  <Card
                    className={classes.cards}
                    draggable="true"
                    onDragStart={(e) => onDragStart(e, playlist)}
                    key={playlist.id}
                  >
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography
                          component="h5"
                          variant="h5"
                          className={classes.playlistName}
                        >
                          {playlist.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          className={classes.playlistName}
                        >
                          {playlist.description}
                        </Typography>
                      </CardContent>
                    </div>
                    <CardMedia
                      className={classes.cover}
                      image={playlist.images[0].url}
                      title={playlist.name}
                    />
                  </Card>
                ))}
            </Paper>
          </Grid>
          <Grid item xs={6} onDragOver={allowDrop} onDrop={onDropLeft}>
            <Grid item className={classes.localPlaylistGrid}>
              <Typography
                component="h5"
                variant="h5"
                className={classes.playlistHeading}
              >
                Local playlist
              </Typography>
              <Paper elevation={3} className={classes.localPlaylist}>
                {draggedItem.map((playlist, i) => {
                  return (
                    <Card className={classes.cards} key={i}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography
                            component="h5"
                            variant="h5"
                            className={classes.playlistName}
                          >
                            {playlist.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            className={classes.playlistName}
                          >
                            {playlist.description}
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.cover}
                        image={playlist.images[0].url}
                        title={playlist.name}
                      />
                    </Card>
                  );
                })}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Playlist;
