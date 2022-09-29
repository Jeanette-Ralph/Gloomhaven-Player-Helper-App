const { Schema, model } = require("mongoose");

const cardsSchema = new Schema({
  title: { type: String },
  // image:{

  // },
  in_hand: { type: Boolean },
  lost: { type: Boolean },
  discard: { type: Boolean },
  active: { type: Boolean },
  card_level: Number,
});

const Player_Cards = model("Card", cardsSchema);
module.exports = Player_Cards;
