import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Home from "./pages/Home";
import Player_Cards from "./pages/Player_Cards";
import PLAY_MAT from "./pages/Play_Mat";
import Header from "./components/header";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Items from "./pages/Items";
import DeckMakerProvider from "./components/DeckMakerProvider";
import ItemMakerProvider from "./components/ItemMakerProvider";
import UserProvider from "./utils/UserContext";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const user = useContext(UserProvider);
  console.log("TEST: ", user);
  const jwt = localStorage.getItem('token_id');

  // useEffect(() => {
  //   // if there's no current user but a session exists
  //   const fetchUser = async () => {
  //     // const fetchedUser = await your api call
  //     // setCurrentUser(fetchedUser)
  //   }
  //   if ((!user.currentUser || Object.keys(user.currentUser) && jwt) {
  //     // fetch and set the user
  //     fetchUser();
  //   }
  // }, []);

  return (
    // <DeckProvider>
    //   <div className="App">
    //     <FakeMatList />
    //   </div>
    // </DeckProvider>
    <UserProvider>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Header />
            <DeckMakerProvider>
              <ItemMakerProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cards" element={<Player_Cards />} />
                  <Route path="/mat" element={<PLAY_MAT />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/items" element={<Items />} />
                  <Route path="*" element={<Login />} />
                </Routes>
              </ItemMakerProvider>
            </DeckMakerProvider>
          </div>
        </Router>
      </ApolloProvider>
    </UserProvider>
  );
}

export default App;
