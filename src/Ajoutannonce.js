import React, { useContext, useState } from "react";
import scss from "./Ajoutannonce.module.scss";
import { Offrecontext } from "./Offrecontext";
import Partie5 from "./Partie5";

export default function Ajoutannonce() {
  const { offres, setoffres } = useContext(Offrecontext);
  const [nom, setnom] = useState("");
  const [post, setpost] = useState("");
  const [ns, setns] = useState();
  const [duree, setduree] = useState("");
  const [dexp, setdexp] = useState("");
  const [logo, setlogo] = useState("");
  const [pays, setpays] = useState("");
  const handleFile = (event) => {
    const file = event.target.files[0];
    const url = window.URL.createObjectURL(file);
    setlogo(url);
  };
  const ajoutannonce = () => {
    setoffres([
      ...offres,
      {
        nom: nom,
        post: post,
        ns: ns,
        dure: duree,
        dexp: dexp,
        logo: logo,
        pays: pays,
      },
    ]);
  };
  return (
    <div className={scss?.container}>
      <div className={scss?.nav}></div>
      <div className={scss?.flex}>
        <div className={scss?.form}>
          <h1>Recrutez vos futurs talents directement avec STAGY </h1>
          <div>
            <label>Nom de l'entreprise :</label>
            <input type="text" onChange={(e) => setnom(e.target.value)} />
          </div>
          <div>
            <label>Poste disponible :</label>
            <input type="text" onChange={(e) => setpost(e.target.value)} />
          </div>
          <div>
            <label>Nombre de stagieres demandes :</label>
            <input type="number" onChange={(e) => setns(e.target.value)} />
          </div>
          <div>
            <label>Duree de stage :</label>
            <input type="text" onChange={(e) => setduree(e.target.value)} />
          </div>
          <div>
            <label>Date d'expiration :</label>
            <input type="date" onChange={(e) => setdexp(e.target.value)} />
          </div>
          <div>
            <label>Logo d'entreprise :</label>
            <input type="file" onChange={handleFile} />
          </div>
          <div>
            <label>L'emplacement</label>
            <select onChange={(e) => setpays(e.target.value)}>
              <option>Tunisie</option>
              <option>Canada</option>
              <option>France</option>
            </select>
          </div>
          <button onClick={() => ajoutannonce()}>Publier Votre Offre</button>
        </div>
        <div className={scss?.image}>
          <h3>
            Optimisez votre temps et gagnez en efficacité. Diffusez vos offres
            en 1 clic
          </h3>
        </div>
      </div>
    </div>
  );
}
