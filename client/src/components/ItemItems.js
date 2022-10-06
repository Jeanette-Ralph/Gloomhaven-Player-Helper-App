import React, { useReducer, useContext } from "react";

import { createUseStyles } from "react-jss";
import UserContext from "./User";

import { ItemContext } from "./ItemMaker";

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
export default function ItemList({ title, image }) {
  const classes = useStyles();
  const { setItem } = useContext(ItemContext);
  const user = useContext(UserContext);
  // const active_cards = user.active.includes(title, image);
  const [id, updateId] = useReducer(reducer, 0);
  function update() {
    setItem({
      title,
      id: `${title}-${id}`,
      image,
    });
    updateId();
  }
  return (
    <div className={classes.wrapper}>
      {/* <span
        className={classes.favorite}
        aria-label={favorite ? "Favorite" : "Not Favorite"}
      >
        {favorite ? "⚔️" : ""}
      </span> */}
      <button className={classes.add} onClick={update}>
        <span className={classes.image} role="img" aria-label={title}>
          {image}
        </span>
      </button>
    </div>
  );
}

// CardList.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
