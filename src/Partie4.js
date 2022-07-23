import React from "react";
import Yehseb from "./Yehseb";
import Style from "./Partie3.module.scss";
{
  /*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {icon1 }from "@fortawesome/fab fa-500px";*/
}

export default function Partie4() {
  return (
    <div>
      <div className="counter">
        <div className={Style?.cont}>
          <div className={Style?.klem}>
            {" "}
            {/*<FontAwesomeIcon icon={icon1} /> */}
            <Yehseb end={100} start={0} />
            <p>Offre de stage</p>
          </div>
          <div className={Style?.klem}>
            <Yehseb end={258} start={0} />
            <p>Entreprise</p>
          </div>
          <div className={Style?.klem}>
            <Yehseb end={354} start={0} />
            <p>Ville et pays</p>
          </div>
        </div>
      </div>
    </div>
  );
}
