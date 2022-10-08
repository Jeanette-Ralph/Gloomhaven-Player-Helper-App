import React from "react";
import { createUseStyles } from "react-jss";
import ItemBuilder from "./ItemBuilder";
import ItemSummary from "./ItemSummary";
const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});
export default function ItemMaker(props) {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="Item">
          ⚔️{" "}
        </span>
        Select Your Items!
        <span role="img" aria-label="Item">
          {" "}
          ⚔️
        </span>
        {props.children}
      </h1>
      <ItemBuilder items={props.items} />
      <ItemSummary items={props.items} item={props.item} />
    </>
  );
}
