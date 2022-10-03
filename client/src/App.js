import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Player_Cards from "./pages/Player_Cards";
import PLAY_MAT from "./pages/Play_Mat";
import Header from "./components/header";

// import login from './pages/login';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Player_Cards />} />
            <Route path="/mat" element={<PLAY_MAT />} />
            {/* <Route 
            path="*"
            element={<login />}
          /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
