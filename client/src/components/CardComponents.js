import * as React from "react";

export default function CardList({ cards }) {
  return (
    <div>
      {cards.map((p) => (
        <div key={p}>{p}</div>
      ))}
      <h1>hello from the cards page</h1>
    </div>
  );
}
