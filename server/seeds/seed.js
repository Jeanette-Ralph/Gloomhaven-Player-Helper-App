const db = require("../config/connection");
const Player_Cards = require("../models/Player_Cards");
const cardsSeeds = require("./player_cards.json");
const Battle_Goals = require("../models/Goals");
const goalSeeds = require("./battle_goals.json");
const Items = require("../models/Items");
const itemsSeeds = require("./items.json");
const Character = require("../models/Character");
const characterSeeds = require("./characters.json");

db.once("open", async () => {
  try {
    await Player_Cards.deleteMany({});
    // cmay not need this as they will gen with character later
    // await Player_Cards.create(cardsSeeds);

    await Battle_Goals.deleteMany({});
    await Battle_Goals.create(goalSeeds);

    await Items.deleteMany({});
    await Items.create(itemsSeeds);

    await Character.deleteMany({});
    await Character.create(characterSeeds);

    // need to seed the character with the card data

    for (let i = 0; i < CardsSeeds.length; i++) {
      const { _id, character_card } = await Player_Cards.create(cardsSeeds[i]);
      const characterUpdate = await Character.findOneAndUpdate(
        { character_title: character_card },
        {
          $addToSet: {
            cards: _id,
          },
        }
      );
    }
  } catch (err) {
    console.log(error);
  }
  console.log("all done!");
  process.exit(0);
});
