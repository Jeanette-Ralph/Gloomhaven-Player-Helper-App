import React, { useState } from "react";

import ItemMaker from "../components/ItemMaker";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";

const Items = (props) => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log("--------------item cards-----------", props);
  const items = data?.items || [];
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ItemMaker items={items}>{props.children}</ItemMaker>
      )}
    </div>
  );
};
export default Items;
