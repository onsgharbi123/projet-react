import React, { useContext, useState } from "react";
import scss from "./Ajoutannonce.module.scss";
import { Offrecontext } from "./Offrecontext";
import Partie5 from "./Partie5";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function Ajoutannonce() {
  const navigate = useNavigate();
  const { offres, setoffres } = useContext(Offrecontext);
  const [nom, setnom] = useState("");
  const [post, setpost] = useState("");
  const [ns, setns] = useState();
  const [duree, setduree] = useState("");
  const [descrip, setdescrip] = useState("");
  const [logo, setlogo] = useState("");
  const [pays, setpays] = useState("");
  const handleFile = (event) => {
    const file = event.target.files[0];
    const url = window.URL.createObjectURL(file);
    setlogo(url);
  };
  const ajoutannonce = () => {
    if (!nom) {
      alert("le nom de l'Entreprise est Obligatoire");
    } else if (!post) {
      alert("il faut préciser le post avant publier");
    } else if (!logo) {
      alert("il faut ajouter logo de votre Entreprise");
    } else if (!duree) {
      alert("Il faut indiquer la durèe du stage disponible");
    } else if (!pays) {
      alert("il faut peciser la localisation du votre entreprise");
    } else {
      setoffres([
        ...offres,
        {
          nom: nom,
          post: post,
          ns: ns,
          dure: duree,
          descrip: descrip,
          logo: logo,
          pays: pays,
        },
      ]);
      navigate("/Stage");
    }
  };
  return (
    <div className={scss?.container}>
      <Nav />
      <div className={scss?.nav}></div>
      <div className={scss?.flex}>
        <div className={scss?.form}>
          <p className={scss?.title}>
            Recrutez vos futurs talents directement avec{"  "}
            <span className={scss?.stagy}>STAGY</span>
          </p>

          <div>
            <label>Nom de l'entreprise :</label>
            <input
              required
              className={scss?.input}
              type="text"
              onChange={(e) => setnom(e.target.value)}
            />
          </div>
          <div>
            <label>Poste disponible :</label>
            <input
              className={scss?.input}
              type="text"
              onChange={(e) => setpost(e.target.value)}
            />
          </div>
          <div>
            <label>Nombre de stagieres demandes :</label>
            <input
              className={scss?.input}
              type="number"
              onChange={(e) => setns(e.target.value)}
            />
          </div>
          <div>
            <label>Duree de stage :</label>
            <input
              className={scss?.input}
              type="text"
              onChange={(e) => setduree(e.target.value)}
            />
          </div>
          <div>
            <label>Description :</label>
            <textarea
              className={scss?.input}
              onChange={(e) => setdescrip(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Logo d'entreprise :</label>
            <input className={scss?.input} type="file" onChange={handleFile} />
          </div>
          <div>
            <label>L'emplacement</label>
            <select
              className={scss?.input}
              onChange={(e) => setpays(e.target.value)}
            >
              <option>Tunisie</option>
              <option>Canada</option>
              <option>France</option>
            </select>
          </div>
          <button className={scss?.button} onClick={() => ajoutannonce()}>
            Publier Votre Offre
          </button>
        </div>
        <div className={scss?.image}>
          <h3>
            <span className={scss?.o}>O</span>ptimisez votre temps et gagnez en
            efficacité. Diffusez vos offres en 1 clic
          </h3>
        </div>
      </div>
    </div>
  );
}
