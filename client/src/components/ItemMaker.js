import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import ItemBuilder from "./ItemBuilder";
import ItemSummary from "./ItemSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

// have to figure this out
export const ItemContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function CreateItem(props) {
  const classes = useStyles();
  const [item, setItem] = useReducer(reducer, []);
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="Card">
          ⚔️{" "}
        </span>
        Select Your Items!
        <span role="img" aria-label="Card">
          {" "}
          ⚔️
        </span>
        {props.children}
      </h1>
      <ItemBuilder items={props.items} />
      <ItemSummary items={props.items} item={item} />
    </ItemContext.Provider>
  );
}
