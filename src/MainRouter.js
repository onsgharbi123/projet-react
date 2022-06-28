import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./Acceuil";
import Connect from "./Connect";
import Compte from "./Compte";

import Conseil from "./Conseil";

import Entreprise from "./Entreprise";
import Nav from "./Nav";
import Partie1 from "./Partie1";
import Stage from "./Stage";
export default function MainRouter() {
  return (
    <Router>
      <div className="flex flex-col ">
        <Nav />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Stage" element={<Stage />} />
          <Route path="/Conseil" element={<Conseil />} />
          <Route path="/Entreprise" element={<Entreprise />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Compte" element={<Compte />} />
        </Routes>
      </div>
    </Router>
  );
}
