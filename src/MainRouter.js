import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from './Acceuil';
import Connecter from './Connecter';
import Conseil from './Conseil';
import Entreprise from './Entreprise';
import Partie1 from './Partie1';
import Stage from './Stage';
export default function MainRouter() {
  return (
    <div>
        <Router>
        
        <Routes>
            <Route path='/' element={<Acceuil></Acceuil>} />
            <Route path='/Stage' element={<Stage></Stage>} />
            <Route path='/Conseil' element={<Conseil></Conseil>} />
            <Route path='/Entreprise' element={<Entreprise></Entreprise>} />
            <Route path='/Conncter' element={<Connecter></Connecter>} />
       </Routes>
        </Router>

    </div>
  )
}
