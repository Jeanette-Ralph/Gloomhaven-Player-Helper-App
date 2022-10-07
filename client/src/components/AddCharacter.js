import { useQuery, gql } from "@apollo/client";
// import { useMutation } from "@apollo/client";
// import { ADD_CHARACTER, REMOVE_CHARACTER } from "../utils/mutations";

// can this be conditionally rendered to not appear on the mat page
export default function AddCharacter(props) {
  console.log("----add character-----", props);
  return (
    <div>
      <button>
        Recruit {props.character_properties.character_title} To Your Party
      </button>
    </div>
  );
}
