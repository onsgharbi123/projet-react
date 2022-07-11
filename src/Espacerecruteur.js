import React from "react";
import Nav from "./Nav";
import vd from "./espacerecruteur.mp4";
import scss from "./Espacerecruteur.module.scss";
export default function Espacerecruteur() {
  return (
    <div>
      <Nav />

      <div>
        <video autoPlay loop muted>
          <source src={vd} width="100px" type="video/mp4" />
        </video>
      </div>
      <div className={scss?.back}>
        <div className={scss?.box}></div>
      </div>
    </div>
  );
}
