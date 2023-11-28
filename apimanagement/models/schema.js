const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create ninja Schema & model
const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Name field is required"],
  },
  discription: {
    type: String,
    required: [true, "Name field is required"],
  },
  dueDate: {
    type: String,
    required: [true, "Name field is required"],
  },
  status: {
    type: String,
    default: "pending",
  },
});

const taskModel = mongoose.model("TaskManage", TaskSchema);

module.exports = taskModel;
