import * as React from "react";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div>
          <h2>{card.title}</h2>
          <div key={card._id} className="card"></div>
        </div>
      ))}
    </div>
  );
};
export default CardList;
