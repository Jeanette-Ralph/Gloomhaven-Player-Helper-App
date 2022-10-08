import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { ItemContext } from "./ItemMakerProvider";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 45,
    maxHeight: 50,
    "& li": {
      width: 125,
    },
  },

  wrapper: {
    borderTop: "black solid 1px",
    display: "block",
    padding: 40,
  },
});

export default function ItemSummary(props) {
  const classes = useStyles();
  const { item } = useContext(ItemContext);
  console.log(item);
  return (
    <div className={classes.wrapper}>
      <h2>Your item</h2>
      <ul className={classes.list}>
        {item.map((item) => (
          <li key={item.id}>{item.image}</li>
        ))}
      </ul>
    </div>
  );
}
