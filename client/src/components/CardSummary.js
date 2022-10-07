import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { DeckContext } from "./DeckMakerProvider";

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

export default function CardSummary(props) {
  const classes = useStyles();
  const { deck } = useContext(DeckContext);
  console.log(deck);
  return (
    <div className={classes.wrapper}>
      <h2>Your Deck</h2>
      <ul className={classes.list}>
        {deck.map((props) => (
          <li key={props.id}>
            {props.title}
            {props.image}
          </li>
        ))}
      </ul>
    </div>
  );
}
