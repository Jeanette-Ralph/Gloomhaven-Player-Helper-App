import React from "react";
import { useUsers } from "../providers/UserContext";

export default function UserComponents() {
  const stateStore = useUsers();
  return (
    <div>
      Hello
      <h2>player:</h2>
      {stateStore.users.map((e) => (
        <ul>
          <li>name: {e.name}</li>
          <li>character: {e.character}</li>
          <li>{e.card}</li>
        </ul>
      ))}
      <p>{JSON.stringify(stateStore)}</p>
    </div>
  );
}
