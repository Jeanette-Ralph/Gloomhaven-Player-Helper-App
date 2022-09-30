import { gql } from "@apollo/client";

export const QUERY_CARDS = gql`
  query getPlayer_Cards {
    player_cards {
      _id
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
