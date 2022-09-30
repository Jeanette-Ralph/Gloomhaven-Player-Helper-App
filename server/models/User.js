const { Schema, model } = require("mongoose");

const characterSchema = require("./Character");
const itemSchema = require("./Items");
const cardsSchema = require("./Player_Cards");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },

    // set items, player_cards, character to be an array of data that adheres to the bookSchema
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Character",
      },
    ],

    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Items",
      },
    ],

    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Player_Cards",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
