import React from "react";
import { useNavigate } from "react-router-dom";
import Offres from "./Offres";
import scss from "./Stage.module.scss";
export default function Stage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={scss?.nav}></div>
      <div className={scss?.container}>
        <div className={scss?.btns}>
          <button className={scss?.btn}>Tous</button>
          <button
            className={scss?.btn}
            onClick={() => navigate("/OffresTunisie")}
          >
            En Tunisie
          </button>
          <button
            className={scss?.btn}
            onClick={() => navigate("/OffresFrance")}
          >
            En France
          </button>
          <button
            className={scss?.btn}
            onClick={() => navigate("/OffresCanada")}
          >
            En canada
          </button>
        </div>
        <div>
          <Offres />
        </div>
      </div>
    </div>
  );
}
