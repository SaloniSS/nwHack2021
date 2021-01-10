import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import "../styles/styling.css";
var bcrypt = require("bcryptjs");
const axios = require("axios").default;

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
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

function Register() {
  const classes = useStyles();
  let history = useHistory();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(false);

  const registerUser = async () => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const phoneNumber = parseInt(phone);

        await axios
          .get(
            `https://nwhack.wl.r.appspot.com/api/v1/users/phone/${phoneNumber}`
          )
          .then(async (response) => {
            //user already exists
            console.log(response);
            console.log("User already exists");
            setError(true);
          })
          .catch(async (error) => {
            //user does not exist
            console.log(error);

            const user = {
              Name: name,
              Email: email,
              Phone: phoneNumber,
              Password: hash,
            };
            console.log(user);

            await axios
              .post("https://nwhack.wl.r.appspot.com/api/v1/users/", user)
              .then(async (response) => {
                console.log("Success");
                history.push("/home");
              })
              .catch(function (error) {
                console.log(error);
              });
          });
      });
    });
  };

  return (
    <div className="Register">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Cerv
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Register with your E-mail and phone number.
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        </CardContent>
        {error && <h4 style={{ color: "red" }}>User already exists</h4>}
        <CardActions>
          <button className="formBtn" onClick={registerUser}>
            Register
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Register;
