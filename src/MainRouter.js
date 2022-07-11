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
import OffresTunisie from "./OffresTunisie";
import OffresFrance from "./OffresFrance";
import OffresCanada from "./OffresCanada";
import EntreprisesTunisie from "./EntreprisesTunisie";
import EntreprisesFrance from "./EntreprisesFrance";
import EntreprisesCanada from "./EntreprisesCanada";
import Espacerecruteur from "./Espacerecruteur";
import Ajoutdemande from "./Ajoutdemande";
export default function MainRouter() {
  return (
    <Router>
      <div className="flex flex-col ">
        <Routes>
          <Route path="/" element={<Connect />} />
          <Route path="/Stage" element={<Stage />} />
          <Route path="/Conseil" element={<Conseil />} />
          <Route path="/Entreprise" element={<Entreprise />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Ajoutannonce" element={<Ajoutannonce />} />
          <Route path="/OffresTunisie" element={<OffresTunisie />} />
          <Route path="/OffresFrance" element={<OffresFrance />} />
          <Route path="/OffresCanada" element={<OffresCanada />} />
          <Route path="/EntreprisesTunisie" element={<EntreprisesTunisie />} />
          <Route path="/EntreprisesFrance" element={<EntreprisesFrance />} />
          <Route path="/EntreprisesCanada" element={<EntreprisesCanada />} />
          <Route path="/EspaceRecruteur" element={<Espacerecruteur />} />
          <Route path="/Ajoutdemande" element={<Ajoutdemande />} />
        </Routes>
      </div>
    </Router>
  );
}
