import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHARACTERS } from "../utils/queries";
import { CharacterImage } from "./CharacterImage";
import AddCharacter from "./AddCharacter";

export default function Characters() {
  const [currentCharState, setState] = useState({
    id: null,
    image: null,
    character_title: null,
  });
  const { loading, error, data } = useQuery(QUERY_CHARACTERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  function handleCharacterChange(character) {
    setState(
      data.characters.filter((char) => {
        return char.character_title === character;
      })[0]
    );
  }
  return (
    <div>
      <select
        name="character"
        onChange={(event) => handleCharacterChange(event.target.value)}
      >
        {data.characters.map((character) => (
          <option key={character.id} value={character.id}>
            {character.character_title}
          </option>
        ))}
      </select>
      <CharacterImage character_properties={currentCharState} />
      <AddCharacter character_properties={currentCharState} />
    </div>
  );
}
