import React, { useState, useMemo } from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  // need to get user data
  // const [currentUser, setCurrentUser] = useState({
  //   name: "John",
  //   role: "Admin",
  //   id: 142323,
  // });
  const [currentUser, setCurrentUser] = useState({});
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
