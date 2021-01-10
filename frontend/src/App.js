import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Home from "./pages/home";
import Requests from "./pages/Requests";
import AddJob from "./pages/AddJob";
import Register from "./pages/register";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/add" exact component={AddJob} />
          <Route path="/requests" exact component={Requests} />
          <Route path="/register" exact component={() => <Register />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
