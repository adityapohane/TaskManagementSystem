const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/task");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/tasks", require("./api"));

app.use(function (err, res, res, next) {
  res.status(422).send({ error: err.message });
});

// listen for requests
const port = process.env.port || 4000;
app.listen(port, function () {
  console.log(`now listening for requests ${port}`);
});
