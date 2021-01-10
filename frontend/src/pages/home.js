import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;
let GLOBAL = require("../global");

const useStyles = makeStyles({
  jobPosting: {
    margin: 25,
  },
});

function Home() {
  const [posts, setPosts] = useState(null);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    const loadPosts = async () => {
      const postsRes = await axios.get(
        `https://nwhack.wl.r.appspot.com/api/v1/postings`
      );
      setPosts(postsRes.data.payload);
    };
    loadPosts();
  }, []);

  const logout = () => {
    GLOBAL.userID = "";
    history.push("/");
  };

  return (
    <div className="dashboard">
      <Navbar title="Home Page" />
      <h1 style={{ color: "white" }}>{posts ? "Open Jobs" : "Loading..."}</h1>
      {posts && (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={6}>
              <Card variant="outlined" className={classes.jobPosting}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.Title}
                  </Typography>
                  <Typography color="textSecondary">{post.Value}</Typography>
                  <Typography color="textSecondary">{post.Location}</Typography>
                  <Typography variant="h5">{post.Description}</Typography>
                </CardContent>
                <CardActions>
                  <button className="formBtn">Request</button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <button onClick={logout}>Logout</button>
      {/* <Link to="/">
        <button>Logout</button>
      </Link> */}
    </div>
  );
}

export default Home;
