import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($userId: ID!) {
    addCharacter(userId: $userId) {
      _id
      username
      character_title
    }
  }
`;

// export const REMOVE_CHARACTER = gql`
//   mutation removeCharacter($characterId: ID!) {
//     removeCharacter(characterId: $characterId) {
//         _id
//         username
//         character_title
//     }
//   }
// `;

// export const UPDATE_CHARACTER = gql`
//   mutation addCharacter($characterId: ID!) {
//     addCharacter(characterId: $characterId) {
//         _id
//         username
//         character_title
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

