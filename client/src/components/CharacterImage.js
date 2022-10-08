import React from "react";

export function CharacterImage(props) {
  return (
    <div>
      <img src={props.character_properties.image} />
    </div>
  );
}
