import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import color from "color";

const useStyles = createUseStyles({
  button: {
    background: "gold",
    fontSize: 12,
    "&:hover": {
      background: "yellow",
    },
  },
  ctaButton: {
    extend: "button",
    "&:hover": {
      background: color("yellow").darken(0.3).hex(),
    },
  },
});

function Goldstats() {
  const classes = useStyles();
  const [stat, setStat] = useState(0);

  useEffect(() => {
    document.title = `${stat}`;
  });

  const increaseStat = () => {
    setStat(stat + 1);
  };

  const decreaseStat = () => {
    setStat(stat - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">Gold</div>
      <div className="card-body">
        <p className="card-text">{stat}</p>
        <button type="button" className={classes.button} onClick={increaseStat}>
          ⇧
        </button>{" "}
        <button className={classes.button} type="button" onClick={decreaseStat}>
          ⇩
        </button>
      </div>
    </div>
  );
}

export default Goldstats;
