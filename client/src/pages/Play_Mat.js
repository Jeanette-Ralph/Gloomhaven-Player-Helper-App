import React from "react";
import ItemSummary from "../components/ItemSummary";
import CardSummary from "../components/CardSummary";

const Play_Mat = (props) => {
  console.log("----playmat------", props.cards);
  return (
    <div>
      <CardSummary cards={props.cards} deck={props.deck} />
      <ItemSummary items={props.items} item={props.items} />
    </div>
  );
};

export default Play_Mat;
