import React from "react";
import ItemComp from "../components/ItemComponent";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";

const Play_Mat = () => {
  const data = useQuery(QUERY_ITEMS);
  const items = data?.items || [];
  return <ItemComp items={items} />;
};

export default Play_Mat;
