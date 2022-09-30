const db = require("../config/connection");
const Player_Cards = require("../models/Player_Cards");
const cardsSeeds = require("./player_cards.json");
db.once("open", async () => {
  try {
    await Player_Cards.deleteMany({});
    await Player_Cards.create(cardsSeeds);
  } catch (err) {
    console.log(error);
  }
  console.log("all done!");
  process.exit(0);
});
