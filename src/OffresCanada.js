import React from "react";
import Scss from "./Stage.module.scss";
import { useNavigate } from "react-router-dom";
import { Offrecontext } from "./Offrecontext";
import { useContext } from "react";
import scss from "./Offre.module.scss";
import Partie5 from "./Partie5";
import Nav from "./Nav";

export default function OffresCanada() {
  const navigate = useNavigate();
  const { offres } = useContext(Offrecontext);
  return (
    <div>
      <Nav />
      <div className={Scss?.container}>
        <div className={Scss?.canada}>
          <div className={Scss?.title}>
            <p>Trouvez votre stage Maintenant</p>
          </div>
          <div className={Scss?.btns}>
            <button className={Scss?.btn} onClick={() => navigate("/Stage")}>
              Tous
            </button>
            <button
              className={Scss?.btn}
              onClick={() => navigate("/OffresTunisie")}
            >
              En Tunisie
            </button>
            <button
              className={Scss?.btn}
              onClick={() => navigate("/OffresFrance")}
            >
              En France
            </button>
            <button
              className={Scss?.btn}
              onClick={() => navigate("/OffresCanada")}
            >
              En canada
            </button>
          </div>
        </div>
        <div>
          {offres.map((e) => {
            if (e.pays == "Canada") {
              return (
                <div className={scss?.item}>
                  <div>
                    <img src={e.logo} width={190} height={200} />
                  </div>
                  <div className={scss?.infs}>
                    <h4 className={scss?.post}>{e.post}</h4>
                    <div className={scss?.display}>
                      <p className={scss?.nom}>{e.nom}</p>
                      <p className={scss?.pays}>{e.pays}</p>
                    </div>
                    <p className={scss?.desc}>{e.descrip}</p>
                    <div className={scss?.display}>
                      <p className={scss?.pays}>{e.dure}</p>
                      <p className={scss?.pays}>{e.ns}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Partie5 />
      </div>
    </div>
  );
}
