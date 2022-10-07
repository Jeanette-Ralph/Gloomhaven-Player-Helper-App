import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_CHARACTERS } from "../utils/queries";

const GET_CHARACTER_IMAGE = gql`
  query getCharacter($character_title: String!) {
    character(character_title: $character_title) {
      image
    }
  }
`;

export function CharacterImage(props) {
  console.log("characterimage", props);
  // const { loading, error, data } = useQuery(GET_CHARACTER_IMAGE, {
  //   variables: { character_title },
  // });
  // console.log("----caravcter Image data-----", data);
  // if (loading) return null;
  // if (error) return `Error! ${error}`;
  // return <img src={data.character.image} />;
  return <div>{console.log(props)}</div>;
}
