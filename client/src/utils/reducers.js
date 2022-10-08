import React, { useReducer } from "react";
import { REMOVE_CARD, REMOVE_ITEM } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_CARD:
      let newCardState = state.deck.filter((card) => {
        return card.title !== action.title;
      });
      return {
        ...state,
        deckOpen: newState.length > 0,
        deck: newCardState,
      };
    case REMOVE_ITEM:
      let newItemState = state.item.filter((item) => {
        return item.title !== action.title;
      });
      return {
        ...state,
        itemOpen: newState.length > 0,
        item: newItemState,
      };
    default:
      return state;
  }
};

// export function useProductReducer(initialState) {
//     return useReducer(reducer, initialState);
//   }
