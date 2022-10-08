import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../utils/mutations";
import { UserContext } from "../utils/UserContext";

export default function AddCharacter(props) {
  const { currentUser } = useContext(UserContext);

  const handleCharacterAdd = () => {};

  return (
    <div>
      <button onClick={handleCharacterAdd}>
        Recruit {props.character_properties.character_title} To Your Party
      </button>
    </div>
  );
}
