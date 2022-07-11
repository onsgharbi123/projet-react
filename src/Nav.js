import React from "react";
import { Link } from "react-router-dom";
import Taswira from "./logoelithebelihons---1.png";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const chandeBackground = () => {
    if (window.scrollY >= 600) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", chandeBackground);
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <div className="logo">
          <div className="pos-abs">
            <img src={Taswira} width={50} height={30} />
          </div>
          <h4>STAGY</h4>
        </div>
        <button id="burger" className="nav__burger-button">
          <div className="nav__burger">
            <div className="nav__burger-inner" />
          </div>
        </button>
        <ul className="nav__link-wrapper !opacity-[1]">
          <li className="nav__link">
            <Link to="/Acceuil">Acceuil</Link>
          </li>
          <li className="nav__link">
            <Link to="/Stage">Offres</Link>
          </li>
          <li className="nav__link">
            <Link to="/Entreprise">Entreprises</Link>
          </li>
          <li className="nav__link ">
            <Link to="/EspaceRecruteur">Espace Recruteur</Link>
          </li>
          <li className="nav__link ">
            <Link to="/Conseil">Conseils</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
