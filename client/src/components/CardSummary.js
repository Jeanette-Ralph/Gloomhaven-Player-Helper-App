import React, { useContext } from "react";
import { createUseStyles } from "react-jss";

import { DeckContext } from "./DeckMaker";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 50,
    "& li": {
      width: 100,
    },
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    padding: 25,
  },
});
// cards?
export default function CardSummary({ cards }) {
  console.log("------card summary-----", cards);
  const classes = useStyles();
  const { deck } = useContext(DeckContext);
  console.log("------card summary-----", deck);
  return (
    <div className={classes.wrapper}>
      <h2>Your Deck</h2>
      <ul className={classes.list}>
        {deck.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
