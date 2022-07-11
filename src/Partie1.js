import React from "react";
import Back from "./Partie1.module.scss";
import Nav from "./Nav";
import Taswira from "./Tas1.jpg";
import tas from "./IMG1.jpg";
import tass from "./Tas2.jpg";
import Vbg from "./video1.mp4";
import Partie4 from "./Partie4";
import Partie2 from "./Partie2";
import { Navigate, useNavigate } from "react-router-dom";

export default function Partie1() {
  {
    /* const css = 'z-[50] text-[4rem] text-[white' */
  }
  const navigate = useNavigate();
  return (
    <div>
      <div className={Back?.container1}>
        <video className={Back?.vid} autoPlay loop muted>
          <source width={2700} src={Vbg} type="video/mp4" />
        </video>
        {/* <Nav></Nav> */}
        <div className={Back?.title1}>
          <p>Trouvez le job qui vous correspond</p>
        </div>
        <Partie4></Partie4>
      </div>
      <Partie2></Partie2>

      <div className={Back?.container2}>
        <div>
          <div>
            <img className={Back?.im1} src={Taswira} width={280} height={280} />
            <img className={Back?.im2} src={tass} width={280} height={280} />
          </div>
          <div>
            <img className={Back?.im3} src={tas} width={570} height={270} />
          </div>
        </div>

        <div className={Back?.para}>
          <p className={Back?.titre}>
            <span className={Back?.A}>A</span>PPROFONDIRE
          </p>
          <p>
            Entrer sur le marché du travail, c’est parfois un saut dans
            l’inconnu. Alors rien de mieux donc que d’échanger avec des
            professionnels lors de nos évènements physiques et virtuels pour
            élargir vos horizons et lever les doutes. Ajoutez-y nos conseils
            pratiques spécialement conçus pour vous, et vous voilà prêts à vous
            lancer
          </p>
          <button className={Back?.btn} onClick={() => navigate("/Conseil")}>
            Conseils et Astuces
          </button>
        </div>
      </div>
    </div>
  );
}
