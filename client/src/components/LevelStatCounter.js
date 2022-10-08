// Import useEffect from React.
import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import color from "color";

const useStyles = createUseStyles({
  button: {
    background: "orange",
    fontSize: 12,
    "&:hover": {
      background: "red",
    },
  },
  ctaButton: {
    extend: "button",
    "&:hover": {
      background: color("orange").darken(0.3).hex(),
    },
  },
});

function Levelstats() {
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
      <div className="card-header bg-warning text-white">Character Level</div>
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

export default Levelstats;
