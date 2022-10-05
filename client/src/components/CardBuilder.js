import React from "react";
import CardItems from "./CardItems";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

export default function CardBuilder({ cards }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {cards.map((card) => (
        <CardItems
          key={card.title}
          image={<img src={card.image} />}
          title={card.title}
        />
      ))}
    </div>
  );
}
