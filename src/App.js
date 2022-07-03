import "./App.css";
import MainRouter from "./MainRouter";
import { UserContext } from "./Usercontext";
import { useState } from "react";
import { Offrecontext } from "./Offrecontext";

function App() {
  const [users, setusers] = useState([
    { name: "ons", mdp: "123" },
    { name: "selim", mdp: "1234" },
  ]);
  const [offres, setoffres] = useState([
    {
      nom: "JOB Assurances",
      post: "Conseiller(e) commercial(e) / téléphoniste ",
      ns: "2 stagieres",
      dure: "1mois",
      descrip:
        "JOB Assurances vous propose une offre de stage à Paris (75) Nos locaux sont situés dans le chic 16ème arrondissement",
      logo: "https://www.stage.fr/files/pictures/JOB%27ASSUR.png",
      pays: "France",
    },
    {
      nom: "Auchan Retail France",
      post: "Contrôleur interne junior en stage ",
      ns: "1 stagieres",
      dure: "2mois",
      descrip:
        "Nous recherchons un Contrôleur Interne Junior Finance en stage F/H, pour rejoindre nos équipes de Villeneuve d'Ascq !",
      logo: "https://www.stage.fr/files/pictures/b36dee2c12dd0fcf7e99d5209296a20c.png",
      pays: "France",
    },
    {
      nom: "GTEC Training",
      post: "Infographiste",
      ns: "4 stagieres",
      dure: "3mois",
      descrip: "Des infographistes débutant(e)s ou expérimenté(e)s",
      logo: "https://www.tanitjobs.com/files/pictures/2021/02/24/Gtec_group.png",
      pays: "Tunisie",
    },
    {
      nom: "DASSAULT SYSTEMES",
      post: "Juriste en Droit boursier  ",
      ns: "3 stagieres",
      dure: "1mois",
      descrip:
        "Rattaché.e à la Direction Juridique Corporate du groupe,pour traiter des dossiers relevant principalement du droit boursier et de la gouvernance.",
      logo: "https://www.stage.fr/files/pictures/c8384841a25bb6e8e7c09fe3d119ac34.png",
      pays: "France",
    },
  ]);

  return (
    <div className="App">
      <UserContext.Provider value={{ users, setusers }}>
        <Offrecontext.Provider value={{ offres, setoffres }}>
          <MainRouter />
        </Offrecontext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
