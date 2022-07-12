import React, { useContext } from "react";
import Nav from "./Nav";
import vid from "./backback.mp4";
import scss from "./Espacerecruteur.module.scss";
import { Demandecontext } from "./Demandecontext";
export default function Espacerecruteur() {
  const { demande, setdemande } = useContext(Demandecontext);
  return (
    <div>
      <Nav />

      <div>
        <video autoPlay loop muted className={scss?.vid}>
          <source src={vid} width={2700} type="video/mp4" />
        </video>
        <p className={scss?.title}>
          Recrutez les jeunes talents qui feront le succès de votre entreprise
        </p>
      </div>
      <div className={scss?.back}>
        {demande.map((e) => {
          return (
            <div className={scss?.box}>
              <h2>{e.fullname}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
