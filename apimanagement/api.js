const express = require("express");
const router = express.Router();
const taskModel = require("./models/schema");

// get a list of data from the db
router.get("/", function (req, res) {
  taskModel.find(function (err, tasks) {
    res.json(tasks);
  });
});
router.get("/:id", function (req, res) {
  taskModel.find(function (err, task) {
    res.json(task);
  });
});

// add a new data to the db
router.post("/", function (req, res, next) {
  taskModel
    .create(req.body)
    .then(function (task) {
      res.send(task);
    })
    .catch(next);
});

// update a data in the db
router.put("/:id", function (req, res, next) {
  taskModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (task) {
      res.send(task);
    })
    .catch(() => {
      return res.status(401).send("Error");
    });
});

// delete a data from the db
router.delete("/:id", function (req, res, next) {
  taskModel.findOneAndDelete({ id: req.params.id }).then(function (task) {
    res.send(task);
  });
});
module.exports = router;
