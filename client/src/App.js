import React from "react";
import UserComponents from "./components/UsersComponents";
import "./App.css";
import UserProvider from "./providers/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserComponents />
      </div>
    </UserProvider>
  );
}

export default App;
