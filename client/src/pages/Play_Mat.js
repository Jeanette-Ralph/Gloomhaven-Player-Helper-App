import React from "react";
import Items from "./Items";
import ItemSummary from "../components/ItemSummary";

const Play_Mat = (props, { item }) => {
  return (
    <div>
      {/* <Items> */}
      {/* </Items> */}

      {"loading" ? (
        <div>Loading...</div>
      ) : (
        <ItemSummary items={props.items} item={item} />
      )}
    </div>
  );
};

export default Play_Mat;
