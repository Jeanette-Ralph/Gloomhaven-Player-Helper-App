import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import CardBuilder from "./CardBuider";
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

export default function CreateDeck(props) {
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
        {props.children}
      </h1>
      <CardBuilder cards={props.cards} />
      <CardSummary cards={props.cards} deck={deck} />
    </DeckContext.Provider>
  );
}
