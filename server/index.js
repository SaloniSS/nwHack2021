const express = require("express");
var cors = require("cors");

const connectDB = require("./config/db");

const users = require("./router/userRouter");

//Set up environment
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

//Initialize app as express app
const app = express();

//Enable cross-origin resource sharing
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

//GET hello world
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!").end();
});

connectDB();

app.use("/api/v1/users", users);

//Set up and start app connection
const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
