import React from "react";
import ItemItems from "./ItemItems";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

export default function ItemBuilder({ items }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {items.map((item) => (
        <ItemItems
          key={item.title}
          image={<img src={item.image} />}
          title={item.title}
        />
      ))}
    </div>
  );
}
