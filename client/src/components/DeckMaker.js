import React from "react";
import { createUseStyles } from "react-jss";
import CardBuilder from "./CardBuilder";
import CardSummary from "./CardSummary";
const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});
export default function DeckMaker2(props) {
  const classes = useStyles();
  return (
    <>
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
      <CardSummary cards={props.cards} deck={props.deck} />
    </>
  );
}
