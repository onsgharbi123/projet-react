import React, { useContext, useState } from "react";
import { Offrecontext } from "./Offrecontext";
import scss from "./Offre.module.scss";
import Partie5 from "./Partie5";

export default function Offres() {
  const { offres } = useContext(Offrecontext);
  return (
    <div>
      {offres.map((e) => {
        return (
          <div className={scss?.item}>
            <div>
              <img src={e.logo} width={160} height={150} />
            </div>
            <div>
              <h3>{e.nom}</h3>
              <h4>{e.pays}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
