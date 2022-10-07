import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import DeckMaker from "../components/DeckMaker";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

// const SavedPlayerCards = () => {
//   const [userData, setUserData] = useState({});

//   const userDataLength = Object.keys(userData).length;

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const token = Auth.loggedIn() ? Auth.getToken() : null;

//         if (!token) {
//           return false;
//         }

//         const response = await QUERY_CARDS(token);
//         console.log(response);

//         // if (!response.ok) {
//         //   throw new Error("something went wrong!");
//         // }

//         const user = await response.json();
//         setUserData(user);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getUserData();
//   }, [userDataLength]);

// const Cards = (props) => {
//   const { loading, data } = useQuery(QUERY_CARDS);
//   console.log("--------------playercards-----------", props);
//   const cards = data?.cards || [];
//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <DeckMaker cards={cards}>{props.children}</DeckMaker>
//       )}
//     </div>
//   );
// };

const Cards = (props) => {
  const { loading, data } = useQuery(QUERY_CARDS);
  console.log("--------------playercards-----------", props);
  const cards = data?.cards || [];
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DeckMaker cards={cards}>{props.children}</DeckMaker>
      )}
    </div>
  );
};
export default Cards;
