import React from "react";
import { useCard } from "../providers/DeckContext";

export default function FakeMatList() {
  const stateStore = useCard();
  return (
    <div>
      {stateStore.cards.map((e, i) => (
        <ul key={i}>
          <li>e.title</li>
        </ul>
      ))}
    </div>
  );
}
