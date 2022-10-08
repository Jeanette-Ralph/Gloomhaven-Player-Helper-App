import React from "react";
import ItemItems from "./ItemItems";
import "animate.css";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [5, 30],
    justifyContent: "center",
    animate__animated: "animate__fadeIn",
  },
});

export default function ItemBuilder({ items }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {items.map((item) => (
        <ItemItems
          key={item.title}
          image={<img src={item.image} alt="" />}
          title={item.title}
        />
      ))}
    </div>
  );
}
