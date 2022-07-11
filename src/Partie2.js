import React from "react";
import Zina from "./Partie1.module.scss";
import { useNavigate } from "react-router-dom";

export default function Partie2() {
  const navigate = useNavigate();
  return (
    <div className={Zina?.part2}>
      <div className={Zina?.para2}>
        <p className={Zina?.explorer}>Trouvez votre voie</p>
        <p className={Zina?.explorer}>EXPLORER</p>
        <p>
          Votre parcours est unique, comme vous. Que ce soit pour découvrir un
          métier auquel vous n’auriez jamais pensé, ou trouver l’entreprise où
          vous épanouir, on vous accompagne. Notre objectif ? Que vos choix
          professionnels soient en accord avec vos valeurs.
        </p>
        <div>
          <button className={Zina?.button} onClick={() => navigate("/Stage")}>
            Offres de starge
          </button>
          <button
            className={Zina?.button}
            onClick={() => navigate("/Entreprise")}
          >
            Entreprises
          </button>
        </div>
      </div>
      <div>
        {" "}
        <img
          src={"https://htmlstream.com/space/assets/img/900x700/img7.jpg"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
