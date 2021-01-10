import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Navbar from "../components/Navbar";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: "75vw",
    backgroundColor: theme.palette.background.paper,
    marginTop: 150,
  },
  inline: {
    display: "inline",
  },
}));

export default function Requests() {
  const classes = useStyles();

  return (
    <div>
      <Navbar title="Requests" />
      <List className={classes.root}>
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="../assets/profPic.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Car Wash"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Sam Connors
                </Typography>
                {
                  " — I'll be in your neighborhood doing errands this weekend so I'd love to help! What other materials would you like me to bring?"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="../assets/profPic.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Babysitting"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Jennifer Scott
                </Typography>
                {
                  " — Completed and payment received. Thanks for using our service!"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="../assets/profPic.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Math Tutor"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {
                  " — Do you have any experience in Calculus? That is the subject my son is struggling with the most."
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}
