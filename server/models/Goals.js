const { Schema, model } = require("mongoose");

const goalsSchema = new Schema({
  display: { type: Boolean },
  active: { type: Boolean },
});

const Goal = model("Goal", goalsSchema);
module.exports = Goal;
