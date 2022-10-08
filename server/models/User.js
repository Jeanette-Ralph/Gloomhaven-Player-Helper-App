const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const characterSchema = require("./Character");
const itemSchema = require("./Items");
const cardsSchema = require("./Cards");

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
        ref: "Cards",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
