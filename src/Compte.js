import React, { useContext, useRef, useState } from "react";
import Style from "./Compte.module.scss";
import { useNavigate } from "react-router-dom";
import Cm from "./Cm.js";

export default function Compte() {
  const navigate = useNavigate();

  const [Values, setValues] = useState({
    nom: "",
    Prénom: "",
    typee: " ",
    typee2: " ",
    emaill: " ",
    pass: "",
    pswd2: " ",
  });
  const inputs = [
    {
      id: 1,
      name: "nom",
      label: "nom :",
      type: "text",
      errorMessage:
        "Name should be 3-16characters and shouldn't include any  speciale character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "prénom",
      label: "prénom :",

      type: "text",
      errorMessage: "yatini asba",
      errorMessage:
        "Prénom should be 3-16characters and shouldn't include any  speciale character!",
      pattern: "^(?=.*[a-zA-z0-9]){3,16}",
      required: true,
    },
    {
      id: 3,
      label: "Ecole ou Université :",

      name: "typee",

      type: "text",
      required: true,
    },
    {
      id: 4,
      label: "Année d'obtention du diplôme (effective ou estimée) :",

      nom: "typee2",
      type: "text",
      required: true,
    },
    {
      id: 5,
      label: "email :",

      nom: "emaill",
      label: "email :",

      type: "email",
      errorMessage: "it should be a valid email adress!",
      required: true,
    },
    {
      id: 6,
      label: "mot de passe :",

      nom: "pass",

      type: "password",
      errorMessage:
        "password should be 8-20 chracters and include at least, 1 number and 1 special caractére ",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}",
      required: true,
    },
    {
      id: 7,
      label: "confirm mot de passe :",
      nom: "pswd2",
      type: "password",
      errorMessage: "password don't match",
      pattern: Values.pass,
      required: false,
    },
  ];

  const usernameRef = useRef();

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };
  console.log(Values);
  return (
    <div className={Style?.container}>
      <div className={Style?.minbox}>
        <h1 className={Style?.title}>
          Inscrivez-vous pour trouver votre voie avec STAGY
        </h1>

        <form onSubmit={handleSumbit}>
          {inputs.map((e) => (
            <Cm
              className={Style?.form}
              key={e.id}
              {...e}
              value={Values[e.name]}
              onChange={onChange}
            />
          ))}

          <button className={Style?.btn1}>M'inscrire</button>
          <h4 className={Style?.back}>Vous êtes déjà inscrit.e ?</h4>
          <button className={Style?.btn2} onClick={() => navigate("/")}>
            Connectez-vous
          </button>
        </form>
      </div>
    </div>
  );
}
