import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../utils/mutations";
import { UserContext } from "../utils/UserContext";

// can this be conditionally rendered to not appear on the mat page
export default function AddCharacter(props) {
  console.log("----add character-----", props);

  const { currentUser } = useContext(UserContext);
  console.log("current user", currentUser);

  const handleCharacterAdd = () => {
    // your api call to add the character _id to the user _id
  };

  return (
    <div>
      <button onClick={handleCharacterAdd}>
        Recruit {props.character_properties.character_title} To Your Party
      </button>
    </div>
  );
}
