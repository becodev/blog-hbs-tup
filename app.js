const express = require("express");
const dot = require("dotenv").config();
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/public/"));

app.listen(port, () => {
  console.log("Server listening on port:" + port);
});
