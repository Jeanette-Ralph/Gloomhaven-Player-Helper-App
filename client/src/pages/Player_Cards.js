import React, { useState } from "react";

import DeckMaker from "../components/DeckMaker";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

const Cards = () => {
  const { loading, data } = useQuery(QUERY_CARDS);
  console.log("------player cards file-------", data);
  const cards = data?.cards || [];

  return (
    <div>{loading ? <div>Loading...</div> : <DeckMaker cards={cards} />}</div>
  );
};
export default Cards;
