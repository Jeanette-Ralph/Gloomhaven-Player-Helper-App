const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  character_title: String,
  level: Number,
  hp: Number,
  gold: Number,
  xp: Number,
  prosperity_level: Number,
});

const Character = model("Character", characterSchema);
module.exports = Character;
