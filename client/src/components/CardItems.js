import React, { useReducer, useContext } from "react";
import { createUseStyles } from "react-jss";
import { DeckContext } from "./DeckMakerProvider";

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
  function update() {
    setDeck({
      title,
      id: `${id}`,
      image,
    });
    updateId();
  }

  // const removeCard = () => {
  //   setDeck((current) => {
  //     const { image, title, id, ...rest } = current;
  //     return rest;
  //   });
  // };

  const removeCard = () => {
    setDeck((current) => {
      const copy = { ...current };
      delete copy["image"];
      return copy;
    });
    updateId();
  };

  return (
    <div className={classes.wrapper}>
      <h3>{title}</h3>

      <button className={classes.add} onClick={update}>
        <span className={classes.image} role="img" aria-label={title}>
          {image}
        </span>
      </button>
      <button onClick={removeCard}>Remove Card From Hand</button>
    </div>
  );
}
