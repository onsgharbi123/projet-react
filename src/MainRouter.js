import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./Acceuil";
import Connect from "./Connect";
import Compte from "./Compte";

import Conseil from "./Conseil";

import Entreprise from "./Entreprise";

import Ajoutannonce from "./Ajoutannonce";
import Stage from "./Stage";
import Nav from "./Nav";
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
          <Route path="/Ajoutannonce" element={<Ajoutannonce />} />
        </Routes>
      </div>
    </Router>
  );
}
