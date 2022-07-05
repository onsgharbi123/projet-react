import React from "react";
import Scss from "./Pays.module.scss";
import { useNavigate } from "react-router-dom";

export default function Partiepays() {
  const navigate = useNavigate();
  return (
    <div className={Scss?.container}>
      <div className={Scss?.element}>
        <div className={Scss?.france}></div>
        <button className={Scss?.btn} onClick={() => navigate("/OffresFrance")}>
          En France
        </button>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.canada}></div>
        <button className={Scss?.btn} onClick={() => navigate("/OffresCanada")}>
          En Canada
        </button>
      </div>
      <div className={Scss?.element}>
        <div className={Scss?.tunisie}></div>
        <button
          className={Scss?.btn}
          onClick={() => navigate("/OffresTunisie")}
        >
          En Tunisie
        </button>
      </div>
    </div>
  );
}
