import React from "react";
import Navbar from "../components/Navbar";
import { Link, withRouter, useHistory } from "react-router-dom";
let GLOBAL = require("../global");

function Home() {
  let history = useHistory();

  const logout = () => {
    GLOBAL.userID = "";
    history.push("/");
  };

  return (
    <div className="dashboard">
      <Navbar title="Home Page" />
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      {/* <Link to="/">
        <button>Logout</button>
      </Link> */}
    </div>
  );
}

export default Home;
