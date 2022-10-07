const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  character_title: String,
  level: Number,
  hp: Number,
  gold: Number,
  xp: Number,
  prosperity_level: Number,
  image: String,
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "cards",
    },
  ],
});

const Character = model("Character", characterSchema);
module.exports = Character;
