import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./comp/VideoPlayer";
import Notifications from "./comp/Notifications";
import Options from "./comp/Options";
import "./chatApp.css"
import { ContextProvider } from "./SocketContext"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));
const App = () => {
  const classes = useStyles();
  return (
      <ContextProvider>
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          style={{ variant: "h4", color: "red", textAlign: "center" }}
        >
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
    </ContextProvider>
  );
};

export default App;
