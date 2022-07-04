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
      logo: "http://www.gtec.com.tn/images/logo_gtec_group.jpg",
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
    {
      nom: "Tunisie Didact",
      post: "Graphic Designer & Community Manager  ",
      ns: "2 stagieres",
      dure: "1mois",
      descrip:
        "Pour renforcer son Département Communication et Marketing,  Tunisie didact cherche un (e) :Stagiaire Graphic designer & Community manager",
      logo: "http://www.tunisie-didact.com/img/tunisie-didact-logo-1558601826.jpg",
      pays: "Tunisie",
    },
    {
      nom: "Colas",
      post: "Stage en Génie Civil - Construction Automne",
      ns: "1 stagieres",
      dure: "3mois",
      descrip:
        "N'attends plus, joins-toi à notre équipe ! Connais-tu Sintra ? Sintra construit tous les types d'infrastructures à travers le Québec",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgzj4SNfS76tM8tvNE4aYepR9oQ-eF4YvUPO&s=0",
      pays: "Canada",
    },
    {
      nom: "Leclerc",
      post: "Stage en électromécanique",
      ns: "5 stagieres",
      dure: "2mois",
      descrip:
        "N'attends plus, joins-toi à notre équipe ! Connais-tu Sintra ? Sintra construit tous les types d'infrastructures à travers le Québec",
      logo: "https://www.e.leclerc/assets/images/sue-logo.svg",
      pays: "Canada",
    },
    {
      nom: "Edraak",
      post: "Stage en Assistante de Direction",
      ns: "2 stagieres",
      dure: "1mois",
      descrip:
        "Centre de formation cherche une stagiaire en assistante de direction  pour un mois minimum stage non payant ",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB9CAMAAACvfAzeAAAAzFBMVEX///+7xctDp6roPUeIMEXZ2tv5+fqGjZBATFG4vL38/PxJU1nV19hqcnZFUFbJ5uf1v8Ts7e42oaTnMTre4OFYYWaytrifpKZ3foLNz9HGycu/wsRweHyqrrCZnqE6Rk2MK0HFNki7vMNgam4EICqQlZgqOD8aLTbl3d/VxsrP29zv+fmfYnB/FjNcW2Wl1daPJDxyvL42iInewMU6k5GlHzalMkauL0a1KD6lvsS40NTc8PHDKj346uz3ys/tc3nmHizypq3vmqL119j+cJD0AAADl0lEQVRoge2YaXfcJhRASWwhBJJSxiAJtDmVNW7aTJZudhc3bvP//1NAaPOMZ4k9tU/OeffDjMSArh48ljMIAQAAAAAAAAAAAAAAAADw1XDBOeYIYYwppbvrHlDlYMKkkLLAKKyKrEh3VqWlb+qII4mRJqzB5ruqib+nKpdx7R3Lq5jzBiTe56URI8/hxUf2RvQZvGHMoueIN3yaeHluW/KkSujkncWLOR4nKfZ0nqtp5jzcm8sLqY3jolV+Pnln8eo0Xi6lfZF2eXEpi0JeXvreI73+MjNrE+KsMp/3x2sSjbiCigWuSl7X7aO8VR1ZLeK13uE1iVbY39J8aOex2n+EV5C6f1RWYJqoLV6v9wZ8bJmSOnm4tyLM5YjOZJSxmfdOPg/e2RYgCJP0wd4iblwIuKN/rlk3inu9M7BkcfhQL25YwzeLVRxnaI+XNozoO94f3vz4asZPu8QRk/d6SbXhxWuvLO96+dvVavVuMfHy/Q5vS4jaLM1Jrda90ZpXxIzM+hm/XZ2enn5oXk4sXm33akLazdK0dtHt8pZ38+rN+WnHYib+uN1LC8Ly9UIz6m7I5vPXboyUj4PMGSMlmnlXnfb858VBXsQbwoK1spJpd5HM1ivrxRUfm8V1Rt07dt5fznvvr6N4scuLeEuWRRCKEeVHw8RIictrFPbrZOq7xS1hZp3sOp5L1uXCd78N3kG82DW+FlH6jZxoAjyUm2I3+mZidYGrOs58P4uXrN8Xgta0CK337PfB24s/7tFaMB/BY/7Y8yx3d5rEdjARFXmZVmWgxv62DWjnPXl9dXV1Xf5h+PMvA96wfD1JzbYcVnleJtx5T15fX19//8JywMlWaGWOyloL+wxlk7Zr5JkgRMhDVymrt5yjPennVdJ7TcS99wCxaM3kCBKeCZNiuUltbjdGbD9Umrj+5MtsS69FNqmHeG3EvXe/WPhmK9c5ShLEMztPktZMaF2ZAEPZT23pbxssVvYXznvy9+DdKxa+yZ0kwa2J189TxFORcZza+FXZ5iYcL9pYWUZS0y8qmLxno3efmGuNkZfbDOWaKi4ECrkZV89DQiFtisN7do6e0O7achxf4715caj4Mbj5h+deqkfx9vc9HqMX4dEbPql3Ej+F95/ea6/x/z/AE59ujfb23+6adlr9FFp08+ns9uS//oaaBTA81v8Pe82fb6abo/3rAQAAAAAAAAAAAAAAAAAAAHwjfAE6c02GHnGvkQAAAABJRU5ErkJggg==",
      pays: "Tunisie",
    },
    {
      nom: "Gates",
      post: "Graphiste/Designer",
      ns: "1 stagieres",
      dure: "1 mois",
      descrip:
        "Gates training center , nous sommes un centre de formation basé en Tunisie avec plus de 5 ans sur le marché  ",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Gil9-YYe3Id3Xqr6ptqWW0un8dRpsUOVpBBEKA1hwXFSVZUECAGXgY44PiizGGT_BaI&usqp=CAU",
      pays: "Tunisie",
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
