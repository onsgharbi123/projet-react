import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Style from "./Connect.module.scss";
import { UserContext } from "./Usercontext";
import Nav from "./Nav";

export default function Connect() {
  const navigate = useNavigate();
  const { users, setusers } = useContext(UserContext);
  const [nom, setnom] = useState("");
  const [mdp, setmdp] = useState("");
  const conecter = () => {
    if (users.find((e) => e.name == nom && e.mdp == mdp)) {
      navigate("/");
    } else {
      navigate("/Compte");
    }
  };

  return (
    <div className={Style?.container}>
      <Nav />
      <div className={Style?.form1}>
        <h1 className={Style?.title1}>Se Connecter</h1>
        <div className={Style?.mincontainer}>
          <label>Nom d'utilisateur</label>

          <input type="text" onChange={(e) => setnom(e.target.value)} />
          <br />
          <label>Mot de passe</label>

          <input type="password" onChange={(e) => setmdp(e.target.value)} />
          <br />
          <button className={Style?.btn1} onClick={() => conecter()}>
            Connecter
          </button>
          <br />
          <h4>Pas encore de compte ? </h4>
          <button className={Style?.btn2} onClick={() => navigate("/Compte")}>
            S'inscrire
          </button>
        </div>
      </div>
      <div className={Style?.form2}>
        <h1 className={Style?.title2}>STAGY</h1>
        <p className={Style?.slogan}>
          Accédez à du contenu exclusif de STAGY et découvrez votre prochaine
          opportunité professionnelle.
        </p>
      </div>
    </div>
  );
}
