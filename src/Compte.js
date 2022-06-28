import React from "react";
import Style from "./Compte.module.scss";
import { useNavigate } from "react-router-dom";
export default function Compte() {
  const navigate = useNavigate();
  return (
    <div className={Style?.container}>
      <div className={Style?.minbox}>
        <h1 className={Style?.title}>
          Inscrivez-vous pour trouver votre voie avec STAGY
        </h1>
        <div className={Style?.box}>
          <label>Nom :</label>
          <input type="text" required />
          <label>Prénom :</label>
          <input type="text" />
          <label>Ecole ou Université :</label>
          <input type="text" />
          <label>Année d'obtention du diplôme (effective ou estimée) :</label>
          <input type="text" />
          <label>Email :</label>
          <input type="email" />
          <label>Mot de passe :</label>
          <input type="password" />
          <label>Confirmation du mot de passe :</label>
          <input type="text" />
          <button className={Style?.btn1}>M'inscrire</button>
          <h4>Vous êtes déjà inscrit.e ?</h4>
          <button className={Style?.btn2} onClick={() => navigate("/Connect")}>
            Connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
}
