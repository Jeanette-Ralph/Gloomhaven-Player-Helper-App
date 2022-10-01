const { Schema, model } = require("mongoose");

const cardsSchema = new Schema({
  title: { type: String },
  image: { type: String },
  in_hand: { type: Boolean },
  lost: { type: Boolean },
  discard: { type: Boolean },
  active: { type: Boolean },
  card_level: { type: Number },
  character_title: { type: String },
});

const Player_Cards = model("Card", cardsSchema);
module.exports = Player_Cards;
