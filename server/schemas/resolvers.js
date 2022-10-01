const { AuthenticationError } = require('apollo-server-express');
const { User, Character } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId });
        },

    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            console.log('HITTING ROUTE', username, email);
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            console.log('user', user)
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await profile.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password or email!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addCharacter: async (parent, { userId }, context) => {
            if (context.user) {
                const character = await Character.create({
                    title,
                    level,
                    hp,
                    gold,
                    xp,
                    prosperity_level
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { characters: character._id } }
                );

                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeCharacter: async (parent, { characterId }, context) => {
            if (context.user) {
                const character = await Character.findOneAndDelete({
                    _id: characterId,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { thoughts: character._id } }
                );

                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },


    }
}

module.exports = resolvers;