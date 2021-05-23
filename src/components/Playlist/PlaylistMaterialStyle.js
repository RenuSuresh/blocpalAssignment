import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1em",
    "&:hover": {
      backgroundColor: "#fefefd",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      cursor: "pointer",
    },
  },

  localPlaylistGrid: {
    margin: "0px 20px",
  },
  playlistHeading: {
    color: "#7b113a",
    textTransform: "uppercase",
    fontWeight: 600,
    textDecoration: "underline",
  },
  paper: {
    padding: "10px",
    marginLeft: "20px",
    background: "#8fd6e1",
  },
  localPlaylist: {
    background: "#8ab6d6",
    padding: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  playlistName: {
    textAlign: "left",
  },
}));

export default useStyles;
