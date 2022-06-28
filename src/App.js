import "./App.css";
import MainRouter from "./MainRouter";
import { UserContext } from "./Usercontext";
import { useState } from "react";

function App() {
  const [users, setusers] = useState([{ name: "ons", mdp: "123" }]);

  return (
    <div className="App">
      <UserContext.Provider value={{ users, setusers }}>
        <MainRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
