import React from "react";
import Scss from "./Pays.module.scss";

export default function Partiepays() {
  return (
    <div className={Scss?.container}>
      <div className={Scss?.element}>
        <div className={Scss?.france}></div>
        <button>En france</button>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.canada}></div>
        <div>En canada</div>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.tunisie}></div>
        <div>En tunisie</div>
      </div>
    </div>
  );
}
