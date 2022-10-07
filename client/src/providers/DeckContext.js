import React, { useContext, useState, useEffect, createContext } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";
import { DeckContext } from "../components/DeckMakerProvider";

const CardContext = createContext();

export const useCard = () => useContext(CardContext);

export default function CardProvider(props) {
  //   const { data } = useQuery(QUERY_CARDS);
  //   console.log("--------------player deckcontext-----------", props);
  //   console.log("--------------player deckcontext-----------", data);

  const [cards, setCards] = useState([
    {
      card: "cards",
    },
  ]);
  return (
    <CardContext.Provider
      value={{ cards: cards, setCards: setCards }}
      {...props}
    />
  );
}
