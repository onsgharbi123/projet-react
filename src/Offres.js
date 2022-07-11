import React, { useContext, useState } from "react";
import { Offrecontext } from "./Offrecontext";
import scss from "./Offre.module.scss";

export default function Offres() {
  const { offres } = useContext(Offrecontext);
  return (
    <div>
      {offres.map((e) => {
        return (
          <div className={scss?.item}>
            <div className={scss?.logo}>
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
      })}
    </div>
  );
}
