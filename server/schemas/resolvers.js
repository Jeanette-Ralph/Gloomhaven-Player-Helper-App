const { AuthenticationError } = require("apollo-server-express");
const { User, Items, Goals, Character, Player_Cards } = require("../models");
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

        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId });
        },

        items: async () => {
            return Items.find();
        },

        // get cards and filter by character_title
        // card: async (parent, { character_title }) => {
        //     return Character.findOne({ character_title: character_title });
        // },

        cards: async () => {
            return Player_Cards.find();
        }

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
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password or email!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addCharacter: async (parent, { userId }, context) => {
            if (context.user) {
                const character = await Character.create({
                    character_title
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { characters: character._id } }
                );

                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

    characters: async () => {
      return Character.find();
    },

    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },

    items: async () => {
      return Items.find();
    },

        // updating character except title
        // updateCharacter: async (parent, { characterId }, context) => {
        //     if (context.user) {
        //         const character = await Character.create({
        //             character_title
        //         });

        //         await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $addToSet: { characters: character._id } }
        //         );

        //         return character;
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
    }
}


module.exports = resolvers;
