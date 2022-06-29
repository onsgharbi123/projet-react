import React, { useContext, useState } from "react";
import Style from "./Compte.module.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Usercontext";
export default function Compte() {
  const navigate = useNavigate();
  const { users, setusers } = useContext(UserContext);
  const [input, setinput] = useState("");
  const [psd, setpsd] = useState("");
  const ajout = () => setusers([...users, { name: input, mdp: psd }]);
  return (
    <div className={Style?.container}>
      <div className={Style?.minbox}>
        <h1 className={Style?.title}>
          Inscrivez-vous pour trouver votre voie avec STAGY
        </h1>
        <div className={Style?.box}>
          <label className={Style?.back}>Nom :</label>
          <input type="text" required />
          <label className={Style?.back}>Prénom :</label>
          <input type="text" />
          <label className={Style?.back}>Ecole ou Université :</label>
          <input type="text" />
          <label className={Style?.back}>
            Année d'obtention du diplôme (effective ou estimée) :
          </label>
          <input type="text" />
          <label className={Style?.back}>Email :</label>
          <input type="email" />
          <label className={Style?.back}>Mot de passe :</label>
          <input type="password" />
          <label className={Style?.back}>Confirmation du mot de passe :</label>
          <input type="password" />
          <button className={Style?.btn1}>M'inscrire</button>
          <h4 className={Style?.back}>Vous êtes déjà inscrit.e ?</h4>
          <button className={Style?.btn2} onClick={() => navigate("/Connect")}>
            Connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
}
