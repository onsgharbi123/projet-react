import "./App.css";
import MainRouter from "./MainRouter";
import { UserContext } from "./Usercontext";
import { useState } from "react";
import { Offrecontext } from "./Offrecontext";

function App() {
  const [users, setusers] = useState([
    { name: "ons", mdp: "123" },
    { name: "selim", mdp: "1234" },
  ]);
  const [offres, setoffres] = useState([
    {
      nom: "SANTOS",
      post: "Développeur WEB APPLICATION ",
      ns: "2",
      dure: "1mois",
      dexp: "juillet 2022",
      logo: "https://images.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg?auto=compress&cs=tinysrgb&w=600",
      pays: "tunisie",
    },
  ]);

  return (
    <div className="App">
      <UserContext.Provider value={{ users, setusers }}>
        <Offrecontext.Provider value={{ offres, setoffres }}>
          <MainRouter />
        </Offrecontext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
