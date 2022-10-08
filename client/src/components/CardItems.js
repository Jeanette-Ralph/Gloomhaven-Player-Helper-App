import React, { useReducer, useContext } from "react";
import { createUseStyles } from "react-jss";
import { DeckContext } from "./DeckMakerProvider";
import { REMOVE_CARD } from "../utils/actions";

const useStyles = createUseStyles({
  add: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  favorite: {
    fontSize: 20,
    position: "absolute",
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80,
  },
  wrapper: {
    border: "lightgrey solid 1px",
    margin: 20,
    padding: 25,
    position: "relative",
    textAlign: "center",
    textTransform: "capitalize",
    width: 200,
  },
});

const reducer = (key) => key + 1;
export default function CardList({ image, title }) {
  const classes = useStyles();
  const { setDeck } = useContext(DeckContext);
  const [id, updateId] = useReducer(reducer, 0);
  const { dispatch } = useContext(DeckContext);
  const [, dispatchTitle] = useReducer(reducer, 0);
  function update() {
    setDeck({
      title,
      id: `${id}`,
      image,
    });
    updateId();
  }

  function removeCard(title) {
    dispatch({
      type: REMOVE_CARD,
      currentCategory: title,
    });
    dispatchTitle();
  }

  return (
    <div className={classes.wrapper}>
      <h3>{title}</h3>

      <button className={classes.add} onClick={update}>
        <span className={classes.image} role="img" aria-label={title}>
          {image}
        </span>
      </button>
      {/* <span {...props} role="button" tabIndex="0">
        ✗
      </span> */}
      <button onClick={removeCard}>✗</button>
    </div>
  );
}
