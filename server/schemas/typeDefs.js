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
    level: Int
    hp: Int
    gold: Int
    xp: Int
    prosperity_level: Int
  }

  type Items {
    in_store: Boolean
    spent: Boolean
    prosperity_level: Int
  }

  type Player_Cards {
    title: String
    image: String
    in_hand: Boolean
    lost: Boolean
    discard: Boolean
    active: Boolean
    card_level: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    items: [Items]!
    cards: [Player_Cards]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
