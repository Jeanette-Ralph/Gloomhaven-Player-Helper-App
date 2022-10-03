import React from "react";
import CardComp from "../components/CardComponents";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

const Cards = () => {
  const { loading, data } = useQuery(QUERY_CARDS);
  const cards = data?.cards || [];

  return (
    <div>{loading ? <div>Loading...</div> : <CardComp cards={cards} />}</div>
  );
};
export default Cards;
