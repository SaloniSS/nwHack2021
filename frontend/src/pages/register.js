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

  const registerUser = async () => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const user = {
          Name: name,
          Email: email,
          Phone: phone,
          Passsword: hash,
        };
        console.log(user);
      });
    });
    //history.push("/home");
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
        <CardActions>
          <button className="formBtn" onClick={registerUser}>
            Register
          </button>
          {/* <Link to="/home" style={{ margin: "auto" }}>
            <button className="formBtn">Register</button>
          </Link> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default Register;
