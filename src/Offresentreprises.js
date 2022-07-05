import React from "react";
import { Entreprisescontext } from "./Entreprisescontext";
import { useContext } from "react";
import scss from "./entreprise.module.scss";

export default function Offresentreprises() {
  const { entreprises } = useContext(Entreprisescontext);
  return (
    <div className={scss?.flex}>
      {entreprises.map((e) => {
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
      })}
    </div>
  );
}
