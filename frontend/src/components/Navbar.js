import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ChatIcon from "@material-ui/icons/Chat";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link, useHistory } from "react-router-dom";
let GLOBAL = require("../global");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  let history = useHistory();

  const logout = () => {
    GLOBAL.userID = "";
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/home"
            className={classes.menuButton}
            style={{ marginRight: 10, color: "white" }}
          >
            <HomeWorkIcon fontSize="large" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Link to="/add" style={{ marginRight: 15, color: "white" }}>
            <AddCircleIcon fontSize="large" />
          </Link>
          <Link to="/requests" style={{ marginRight: 15, color: "white" }}>
            <Badge badgeContent={2} color="secondary">
              <ChatIcon fontSize="large" />
            </Badge>
          </Link>
          <Link to="/profile" style={{ marginRight: 15, color: "white" }}>
            <AccountCircle fontSize="large" />
          </Link>
          {/* <Link to="/">
            <ExitToAppIcon fontSize="large" />
          </Link> */}
          <button style={{ width: "100px", height: "35px" }} onClick={logout}>
            Logout
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
