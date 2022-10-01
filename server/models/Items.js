const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  in_store: { type: Boolean },
  spent: { type: Boolean },
  prosperity_level: Number,
  image: { type: String },
});

const Item = model("Item", itemSchema);
module.exports = Item;
