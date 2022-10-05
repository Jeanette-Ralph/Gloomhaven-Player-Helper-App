import React from "react";
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
import UserContext from "./components/User";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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

// how does this become a random player? is player out prop to then load the specific items?
const user = {
  // session username
  name: "James",
  // the cards that they choose
  favorites: [],
};

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={user}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Player_Cards />} />
              <Route path="/mat" element={<PLAY_MAT />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<login />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
