import React from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import '../styles/styling.css';

const useStyles = makeStyles({
  root: {
    minWidth: 700,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 15,
  },
});

function AddJob() {
  const classes = useStyles();

  return (
    <div className="dashboard">
      <Navbar title="Add Job" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Add a Job
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Fill out the form below to add a job to our site!
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <br />
              <TextField
                multiline
                rows={4}
                fullWidth
                className={classes.input}
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
              <br />
              <TextField
                multiline
                rows={2}
                fullWidth
                className={classes.input}
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
              <br />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Value ($)"
                variant="outlined"
              />
            </form>
          </CardContent>
          <CardActions>
            <button className="formBtn">Submit</button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default AddJob;
