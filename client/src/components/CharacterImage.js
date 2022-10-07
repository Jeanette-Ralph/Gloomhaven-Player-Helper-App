import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_CHARACTERS } from "../utils/queries";

// const GET_CHARACTER_IMAGE = gql`
//   query getCharacter($characterId: ID!) {
//     character(characterId: $characterId) {
//       _id
//       image
//     }
//   }
// `;

export function CharacterImage(props) {
  console.log("characterimage", props);

  return <img src={props.character_properties.image} />;
  // return <div>{console.log(props)}</div>;
}
