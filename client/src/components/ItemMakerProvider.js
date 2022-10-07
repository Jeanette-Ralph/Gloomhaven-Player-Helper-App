import React, { useReducer, createContext } from "react";

export const ItemContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function CreateItem(props) {
  const [item, setItem] = useReducer(reducer, []);
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {props.children}
    </ItemContext.Provider>
  );
}
