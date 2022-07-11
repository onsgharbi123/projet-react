import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Offres from "./Offres";
import Partie5 from "./Partie5";

import scss from "./Stage.module.scss";
export default function Stage() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className={scss?.container}>
        <div className={scss?.cover}>
          <div className={scss?.title}>
            <p>Trouvez votre stage Maintenant</p>
          </div>
          <div className={scss?.btns}>
            <button className={scss?.btn}>Tous</button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/OffresTunisie")}
            >
              En Tunisie
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/OffresFrance")}
            >
              En France
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/OffresCanada")}
            >
              En canada
            </button>
          </div>
        </div>
        <div>
          <Offres />
        </div>
        <div>
          <Partie5 />
        </div>
      </div>
    </div>
  );
}
