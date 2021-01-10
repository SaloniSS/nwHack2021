import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../styles/styling.css";
const axios = require("axios").default;
let GLOBAL = require("../global");

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
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [location, setLocation] = useState("");
  let [value, setValue] = useState("");

  const submit = async () => {
    const posting = {
      User: GLOBAL.userID,
      Title: title,
      Description: description,
      Value: "$" + value,
      Location: location,
    };
    console.log(posting);
    await axios
      .post("https://nwhack.wl.r.appspot.com/api/v1/postings/", posting)
      .then(async (response) => {
        console.log("Success");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
              <br />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Value ($)"
                variant="outlined"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </form>
          </CardContent>
          <CardActions>
            <button className="formBtn" onClick={submit}>
              Submit
            </button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default AddJob;
