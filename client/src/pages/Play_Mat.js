import React, { useState } from "react";
import ItemComp from "../components/ItemComponent";
// import { useMutation } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS, QUERY_CARDS } from "../utils/queries";
import CardSummary from "../components/CardSummary";

const Play_Mat = () => {
  // const { loading, data } = useQuery(QUERY_CARDS);
  // const cards = data?.cards || [];

  // return (
  //   <div>{loading ? <div>Loading...</div> : <CardSummary cards={cards} />}</div>

  // );
  <h1>player mat</h1>;
};

export default Play_Mat;
