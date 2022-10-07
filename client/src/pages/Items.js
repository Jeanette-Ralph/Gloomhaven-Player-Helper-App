import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import ItemMaker from "../components/ItemMaker";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import CharacterMenu from "../components/CharacterMenu";

const SavedItems = () => {
  const [userData, setUserData] = useState({});

  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await QUERY_ITEMS(token);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);
};

const Items = (props) => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log("--------------item cards-----------", props);
  const items = data?.items || [];
  return (
    <div>
      <div>
        <CharacterMenu />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ItemMaker items={items}>{props.children}</ItemMaker>
      )}
    </div>
  );
};
export default Items;
