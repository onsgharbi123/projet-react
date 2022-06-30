import React from "react";
import Style from "./Partie5.module.scss";
import Taswira from "./Sans-titre---1.png";
import { useNavigate } from "react-router-dom";

export default function Partie5() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={Style?.partievide}></div>
      <div className={Style?.partiecontact}>
        <div className={Style?.logo}>
          <img
            className={Style?.position}
            src={Taswira}
            width={170}
            height={80}
          />
          <h4 className={Style?.titre}>STAGY</h4>
        </div>
        <div className={Style?.khat}></div>
        <div className={Style?.display}>
          <div>
            <p>Etudiants</p>
            <div className={Style?.khatsghir}></div>
            <button className={Style?.btn} onClick={() => navigate("/Compte")}>
              Sinscrire
            </button>
            <br />
            <button className={Style?.btn} onClick={() => navigate("/Stage")}>
              Chercher une offre
            </button>
            <br />
            <button
              className={Style?.btn}
              onClick={() => navigate("/Entreprise")}
            >
              Decouvrir les entreprises
            </button>
            <br />
            <button className={Style?.btn} onClick={() => navigate("/Conseil")}>
              Conseils recrutement
            </button>
          </div>
          <div>
            <p>Entreprises</p>
            <div className={Style?.khatsghir}></div>
            <button
              className={Style?.btn}
              onClick={() => navigate("/Entreprise")}
            >
              Voir entreprises
            </button>
          </div>
          <div>
            <p>STAGY</p>
            <div className={Style?.khatsghir}></div>
            <button className={Style?.btn} onClick={() => navigate("/")}>
              Nous rejoindre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
