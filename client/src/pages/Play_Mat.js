import React from "react";
import ItemSummary from "../components/ItemSummary";
import CardSummary from "../components/CardSummary";
import StatCounter from "../components/StatCounter";

const Play_Mat = (props) => {
  console.log("----playmat------", props.cards);
  return (
    <div>
      <StatCounter />
      <CardSummary cards={props.cards} deck={props.deck} />
      <ItemSummary items={props.items} item={props.items} />
    </div>
  );
};

export default Play_Mat;
