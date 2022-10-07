import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { ItemContext } from "./ItemMakerProvider";

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

export default function ItemSummary(props) {
  const classes = useStyles();
  const { item } = useContext(ItemContext);
  console.log(item);
  return (
    <div className={classes.wrapper}>
      <h2>Your item</h2>
      <ul className={classes.list}>
        {item.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.image}
          </li>
        ))}
      </ul>
    </div>
  );
}
