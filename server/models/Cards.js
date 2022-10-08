const { Schema, model } = require("mongoose");

const cardsSchema = new Schema({
  title: { type: String },
  image: { type: String },
  in_hand: { type: Boolean },
  lost: { type: Boolean },
  discard: { type: Boolean },
  active: { type: Boolean },
  card_level: { type: Number },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
});

const Cards = model("cards", cardsSchema);
module.exports = Cards;
