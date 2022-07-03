import React from "react";
import Scss from "./Pays.module.scss";

export default function Partiepays() {
  return (
    <div className={Scss?.container}>
      <div className={Scss?.element}>
        <div className={Scss?.france}></div>
        <button className={Scss?.btn}>En France</button>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.canada}></div>
        <button className={Scss?.btn}>En Canada</button>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.tunisie}></div>
        <button className={Scss?.btn}>En Tunisie</button>
      </div>
    </div>
  );
}
