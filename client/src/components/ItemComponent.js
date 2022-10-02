import React from "react";

const ItemList = ({ items }) => {
  if (!items.length) {
    return <h2>Building the Deck</h2>;
  }
  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        <h1>hello</h1>
        {items &&
          items.map((item) => (
            <div key={item._id}>
              {/* <img src={item.image} alt={item.title} /> */}

              <h5>{item.title}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ItemList;
