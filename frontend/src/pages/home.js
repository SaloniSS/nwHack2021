import React from "react";
import Navbar from "../components/Navbar";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="dashboard">
      <Navbar title="Home Page" />
      <h1>Dashboard</h1>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Home;
