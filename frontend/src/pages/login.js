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
let GLOBAL = require("../global");

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

function Login() {
  const classes = useStyles();
  let history = useHistory();
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [userExists, setExists] = useState(true);
  let [error, setError] = useState(false);

  const loginUser = async () => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const phoneNumber = parseInt(phone);

        await axios
          .get(
            `https://nwhack.wl.r.appspot.com/api/v1/users/phone/${phoneNumber}`
          )
          .then(async (response) => {
            console.log("User exists");
            setExists(true);
            hash = response.data.user.Password;
            bcrypt.compare(password, hash).then((res) => {
              if (res) {
                console.log("Authenticated");
                setError(false);
                GLOBAL.userID = response.data.user._id;
                history.push("/home");
              } else {
                console.log("Wrong password");
                setError(true);
              }
            });
          })
          .catch(async (error) => {
            //user does not exist
            console.log(error);
            setExists(false);
          });
      });
    });
  };

  return (
    <div className="Login">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Cerv
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Login to start serving your community.
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        </CardContent>
        {!userExists && <h4 style={{ color: "red" }}>User does not exists</h4>}
        {error && <h4 style={{ color: "red" }}>Wrong Login Credentials</h4>}
        <CardActions>
          <button className="formBtn" onClick={loginUser}>
            Login
          </button>
          {/* <Link to='/home' style={{margin: "auto"}}>
                        <button className="formBtn">Login</button>
                    </Link> */}
          <Link to="/register" style={{ margin: "auto" }}>
            <button className="formBtn">Register</button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
