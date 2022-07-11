import React from "react";
import Partie1 from "./Partie1";
import Partie3 from "./Partie3";
import Partie5 from "./Partie5";
import Partiepays from "./Partiepays";
import Nav from "./Nav";
export default function Acceuil() {
  return (
    <div>
      <Nav />
      <Partie1 />
      <Partie3 />
      <Partiepays />
      <Partie5 />
    </div>
  );
}
