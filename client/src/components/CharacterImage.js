import React from "react";

// need to pull in userID, user context to wrap the routes in

export function CharacterImage(props) {
  console.log("characterimage", props);

  return (
    <div>
      <img src={props.character_properties.image} />
    </div>
  );
}
