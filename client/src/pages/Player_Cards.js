import React, { useState } from "react";
import CardComp from "../components/CardComponents";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

const Cards = () => {
  // const [cardImage, setCardImage] = useState(card.in_hand);

  // const handleChange = (event) => {
  //   const { in_hand } = event.target;

  //   if (in_hand === true) {
  //     setCardImage(false);
  //   } else {
  //     setCardImage(true);
  //   }
  // };

  const { loading, data } = useQuery(QUERY_CARDS);
  const cards = data?.cards || [];

  return (
    <div>{loading ? <div>Loading...</div> : <CardComp cards={cards} />}</div>
  );
};
export default Cards;
