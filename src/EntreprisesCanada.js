import React from "react";
import scss from "./entreprise.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Entreprisescontext } from "./Entreprisescontext";
import Partie5 from "./Partie5";
import Nav from "./Nav";
export default function EntreprisesCanada() {
  const { entreprises } = useContext(Entreprisescontext);
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
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
            if (e.pays == "Canada") {
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
        <div>
          <Partie5 />
        </div>
      </div>
    </div>
  );
}
