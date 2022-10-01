const { Schema, model } = require("mongoose");

const goalsSchema = new Schema({
  display: { type: Boolean },
  active: { type: Boolean },
  image: { type: String },
});

const Goal = model("Goal", goalsSchema);
module.exports = Goal;
