import React, { useContext } from "react";
import Nav from "./Nav";
import vid from "./backback.mp4";
import scss from "./Espacerecruteur.module.scss";
import { Demandecontext } from "./Demandecontext";
import Partie5 from "./Partie5";
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
              <div className={scss.flex}>
                <img src={e.photo} width={130} height={130} />
                <div>
                  <h3>{e.nom}</h3>
                  <p>{e.domaine}</p>
                  <p>{e.niv}</p>
                </div>
              </div>

              <div className={scss?.infs}>
                <p>{e.msg}</p>
                <p>
                  <h6 className={scss?.link}>linkedin : </h6>
                  {e.link}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Partie5 />
    </div>
  );
}
