const express = require("express");
var cors = require("cors");

const connectDB = require("./config/db");

//Set up environment
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

//Initialize app as express app
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
