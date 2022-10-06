import React from "react";
import { useQuery, gql } from "@apollo/client";
import { QUERY_CHARACTERS } from "../utils/queries";

export default function Characters({ onCharacterSelect }) {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS);
  console.log("-----character----", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <select name="character" onChange={onCharacterSelect}>
      {data.characters.map((character) => (
        <option key={character.id} value={character.character_title}>
          {character.character_title}
        </option>
      ))}
    </select>
  );
}

const GET_CHARACTER_IMAGE = gql`
  query Character($character_title: String!) {
    character(character_title: $character_title) {
      id
      image
    }
  }
`;

export default function CharacterImage({ character_title }) {
  const { loading, error, data } = useQuery(GET_CHARACTER_IMAGE, {
    variables: { character_title },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return <img src={data.character.image} />;
}
