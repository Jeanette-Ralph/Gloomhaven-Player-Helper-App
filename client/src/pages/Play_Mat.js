import React, { useState } from "react";
import ItemComp from "../components/ItemComponent";
import CardComp from "../components/CardComponents";
// import { useMutation } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS, QUERY_CARDS } from "../utils/queries";

const Play_Mat = (card) => {
  const [cardImage, setCardImage] = useState(card.in_hand);

  const handleChange = (event) => {
    const { in_hand } = event.target;

    if (in_hand === true) {
      setCardImage(false);
    } else {
      setCardImage(true);
    }
  };

  const { loading, data } = useQuery(QUERY_CARDS);
  const cards = data?.cards || [];

  return (
    <div>{loading ? <div>Loading...</div> : <CardComp cards={cards} />}</div>
  );
};

export default Play_Mat;
