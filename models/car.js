const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  type: String,
  isRoadworthy: Boolean,
  color: String,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
