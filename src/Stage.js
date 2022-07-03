import React from "react";
import Nav from "./Nav";
import Offres from "./Offres";
import scss from "./Stage.module.scss";
export default function Stage() {
  const a = "ons";
  return (
    <div>
      <div className={scss?.nav}></div>
      <div className={scss?.container}>
        <div className={scss?.btns}>
          <button className={scss?.btn}>Tous</button>
          <button className={scss?.btn}>En Tunisie</button>
          <button className={scss?.btn}>En France</button>
          <button className={scss?.btn}>En canada</button>
        </div>
        <div>
          <Offres />
        </div>
      </div>
    </div>
  );
}
