import React, { useState } from "react";

import DeckMaker from "../components/DeckMaker";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

const Cards = (props) => {
  const { loading, data } = useQuery(QUERY_CARDS);
  console.log("--------------playercards-----------", props);
  const cards = data?.cards || [];
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DeckMaker cards={cards}>{props.children}</DeckMaker>
      )}
    </div>
  );
};
export default Cards;
