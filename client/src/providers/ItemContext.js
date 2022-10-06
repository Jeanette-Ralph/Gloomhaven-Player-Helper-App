import React, { useContext, useState, useEffect, createContext } from "react";

const ItemContext = createContext();

export const useItem = () => useContext(ItemContext);

export default function ItemProvider(props) {
  //   const { data } = useQuery(QUERY_CARDS);
  //   console.log("--------------player deckcontext-----------", props);
  //   console.log("--------------player deckcontext-----------", data);
  // const [items, setItems] = useState([
  //   {
  //     items: "items",
  //   },
  // ]);
  // return (
  //   <ItemsContext.Provider
  //     value={{ items: items, setItems: setItems }}
  //     {...props}
  //   />
  // );
}
