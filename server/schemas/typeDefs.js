const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]
    items: [Items]
    cards: [Cards]
  }

  type Character {
    _id: ID
    level: Int
    hp: Int
    gold: Int
    xp: Int
    prosperity_level: Int
    character_title: String
    image: String
    cards: [Cards]
  }

  type Items {
    title: String
    in_store: Boolean
    spent: Boolean
    prosperity_level: Int
    image: String
  }

  type Cards {
    _id: ID
    title: String
    image: String
    in_hand: Boolean
    lost: Boolean
    discard: Boolean
    active: Boolean
    card_level: Int
  }

  type Goals {
    display: Boolean
    image: String
    active: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    character(characterId: ID!): Character
    characters: [Character]
    items: [Items]!
    cards: [Cards]!
    goals: [Goals]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterId: ID!, userId: ID!): Character
    updateCharacter(characterId: ID!, userId: ID!): Character
    removeCharacter(characterId: ID!, userId: ID!): Character
  }
`;
// updateCards(characterId: ID!, cardId: ID!): Cards

module.exports = typeDefs;
