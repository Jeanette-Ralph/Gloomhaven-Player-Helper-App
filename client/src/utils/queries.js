import { gql } from "@apollo/client";

export const QUERY_CARDS = gql`
  query getCards {
    cards {
      title
      image
      in_hand
      lost
      discard
      active
      card_level
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    character {
      character_title
      image
      level
      hp
      gold
      xp
      prosperity_level
    }
  }
`;

export const QUERY_GOALS = gql`
  query getGoals {
    goals {
      display
      active
      image
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      in_store
      spent
      image
      prosperity_level
    }
  }
`;

export const QUERY_USERS = gql`
  query getUSERS {
    user {
      _id
      username
      email
      password
      characters
      items
      cards
    }
  }
`;
