import React, { useContext } from "react";
import scss from "./entreprise.module.scss";
import { useNavigate } from "react-router-dom";
import { Entreprisescontext } from "./Entreprisescontext";

export default function EntreprisesTunisie() {
  const { entreprises } = useContext(Entreprisescontext);
  const navigate = useNavigate();
  return (
    <div>
      <div className={scss?.nav}></div>
      <div className={scss?.container}>
        <div className={scss?.back}>
          <h1 className={scss?.title}>Les Entreprises</h1>
          <div className={scss?.btns}>
            <button
              className={scss?.btn}
              onClick={() => navigate("/Entreprise")}
            >
              Tous
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesTunisie")}
            >
              Tunisie
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesFrance")}
            >
              France
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesCanada")}
            >
              Canada
            </button>
          </div>
        </div>

        <div className={scss?.offres}>
          {entreprises.map((e) => {
            if (e.pays == "Tunisie") {
              return (
                <div className={scss?.box}>
                  <div className={scss?.couverture}>
                    <img src={e.couv} width={370} height={100} />
                  </div>
                  <div className={scss?.logo}>
                    <img
                      className={scss?.logo}
                      src={e.logo}
                      width={120}
                      height={140}
                    />
                  </div>
                  <div className={scss?.infs}>
                    <h5 className={scss?.nom}>{e.nom}</h5>
                    <p className={scss?.desc}>{e.desc}</p>
                    <p className={scss?.pres}>{e.pres}</p>
                    <button className={scss?.voir}>Voir Plus</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
