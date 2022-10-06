const { AuthenticationError } = require("apollo-server-express");
const { User, Character, Items, Player_Cards } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    characters: async () => {
      return Character.find();
    },
    // get cards and filter by character_title
    character: async (parent, { character }) => {
      return Character.findOne({ character }).populate("cards");
    },
    items: async () => {
      return Items.find();
    },

    cards: async () => {
      return Player_Cards.find();
    },
    // goals: async () => {
    //   return Goals.find();
    // },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password or email!");
      }
      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, { userId }, context) => {
      if (context.user) {
        const character = await Character.create({
          character_title,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { characters: character._id } }
        );
        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findOneAndDelete({
          _id: characterId,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: character._id } }
        );
        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // updating character except title
    updateCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.create({
          characterId,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { characters: character._id } }
        );
        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // updateCard: async (parent, { cardId }, context) => {
    //   if (context.character) {
    //     const card = await Card.create({
    //       cardId,
    //     });
    //     await Character.findOneAndUpdate(
    //       { _id: context.character._id },
    //       { $addToSet: { characters: character._id } }
    //     );
    //     return character;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};
module.exports = resolvers;
