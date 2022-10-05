import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import CardBuilder from "./CardBuilder";
import CardSummary from "./CardSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

// have to figure this out
export const DeckContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function CreateDeck({ cards }) {
  console.log("------deck maker-----", cards);
  const classes = useStyles();
  const [deck, setDeck] = useReducer(reducer, []);
  return (
    <DeckContext.Provider value={{ deck, setDeck }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="Card">
          ⚔️{" "}
        </span>
        Build Your Deck!
        <span role="img" aria-label="Card">
          {" "}
          ⚔️
        </span>
      </h1>
      <CardBuilder cards={cards} />
      <CardSummary cards={cards} deck={deck} />
    </DeckContext.Provider>
  );
}
