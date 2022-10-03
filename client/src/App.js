// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import Home from "./pages/Home";
// import Player_Cards from "./pages/Player_Cards";
// import PLAY_MAT from "./pages/Play_Mat";
// import Header from "./components/header";
// import login from './pages/login';
import LoginForm from "./components/LoginForm";


// login dependencies



// end of login stuff

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");
  // const handlePageChange = (page) => setCurrentPage(page);
  // const [cards, setCards] = useState(["power from pain", "maw of the jaw"]);
  // useEffect((

  // ))
  return (
    <div>
      <LoginForm />
      {/* <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Header
            // currentPage={currentPage}
            // handlePageChange={handlePageChange}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Player_Cards cards={cards} />} />
              <Route path="/mat" element={<PLAY_MAT />} />
              {/* <Route 
            path="*"
            element={<login />}
          /> */}
            {/* </Routes> */}
          {/* </div> */}
        {/* </Router> */}
      {/* </ApolloProvider> */} 
    </div>
  );
}

export default App;

// import UserComponents from "./components/UsersComponents";
// import "./App.css";
// import UserProvider from "./providers/UserContext";

// function App() {
//   return (
//     <UserProvider>
//       <div className="App">
//         <UserComponents />
//       </div>
//     </UserProvider>
//   );
// }

// export default App;
