const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]
    items: [Items]
    cards: [Player_Cards]
  }

  type Character {
    title: String
    level: Number
    hp: Number
    gold: Number
    xp: Number
    prosperity_level: Number
  }

  type Items {
    in_store: Boolean
    spent: Boolean
    prosperity_level: Number
  }

  type Player_Cards {
    title: String
    image: String
    in_hand: Boolean
    lost: Boolean
    discard: Boolean
    active: Boolean
    card_level: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID): User
    characters: [Character]
    items: [Items]
    cards: [Cards]
    goals: [Goals]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(
      characterID: ID
      title: String
      level: Number
      hp: Number
      gold: Number
      xp: Number
      prosperity_level: Number
    ): Character
  }
`;

// deleteCharacter(characterID: ID!): Character
// updateCharacter(characterID: ID!): Character
module.exports = typeDefs;
