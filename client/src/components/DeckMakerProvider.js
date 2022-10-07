import React, { useReducer, createContext } from "react";

export const DeckContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function CreateDeck(props) {
  const [deck, setDeck] = useReducer(reducer, []);
  return (
    <DeckContext.Provider value={{ deck, setDeck }}>
      {props.children}
    </DeckContext.Provider>
  );
}
