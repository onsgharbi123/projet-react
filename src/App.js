import "./App.css";
import MainRouter from "./MainRouter";
import { UserContext } from "./Usercontext";
import { useState } from "react";
import { Offrecontext } from "./Offrecontext";
import { Entreprisescontext } from "./Entreprisescontext";
import { Demandecontext } from "./Demandecontext";
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
    {
      nom: "Groupe Rocher",
      post: " Juriste Immobilier H/F",
      ns: "1 stagieres",
      dure: "2 mois",
      descrip: "Cosmétique, Textile et embellissement de la maison",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/241312/logo.png?1582566185",
      pays: "France",
    },
    {
      nom: "TotalEnergies",
      post: " Ingénieur Junior éolien Offshore",
      ns: "1 stagieres",
      dure: "5 mois",
      descrip:
        "Pour réussir intégrer les métiers de l'électricité et des énergies renouvelables,",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/874018/logo.png?1628267603",
      pays: "Canada",
    },
    {
      nom: "Veolia",
      post: "  Gestionnaire Rémunération et Reporting RH ",
      ns: "3 stagieres",
      dure: "2 mois",
      descrip:
        " Le Groupe conçoit et fournit des solutions de gestion de l'eau, des déchets et de l'énergie",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1613/logo.png?1541417697",
      pays: "Canada",
    },
  ]);
  const [entreprises, setentreprises] = useState([
    {
      nom: "Boston Scientific",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/5640612/logo.png?1646991116",
      desc: "Grande entreprise",
      couv: "https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5663064/big.Jpg?1647440262",
      pres: "Innovative medical solutions.",
      pays: "France",
    },
    {
      nom: "OTIS",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1384456/logo.png?1640614666",
      desc: "Grande entreprise",
      couv: "https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5301478/big.jpg?1640018916",
      pres: "Leader mondial ascenseurs et escalators",
      pays: "France",
    },
    {
      nom: "CHU de Liège",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2182156/logo.png?1587626576",
      desc: "Association ",
      couv: "https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/2202876/big.jpg?1560860304",
      pres: "Hôpital universitaire public et pluraliste",
      pays: "Canada",
    },
    {
      nom: "Tunisie Telecom",
      logo: "https://www.tunisietelecom.tn/_layouts/15/MCS.TT.Internet.UI/assets/img/logo-tt.svg",
      desc: " Grande Entreprise ",
      couv: "https://www.tunisietelecom.tn/_layouts/15/MCS.TT.Internet.UI/assets/img/login_lg.jpg",
      pres: "Agence tunisienne d'Internet",
      pays: "Tunisie",
    },
    {
      nom: "as a Guest",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/6074928/logo.png?1656426907",
      desc: " Start-up ",
      couv: "	https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6085107/big.png?1656412643",
      pres: "La 1ère agence de voyages à prix fixes",
      pays: "Canada",
    },
    {
      nom: "fifty-five",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/6026577/logo.png?1655125978",
      desc: " PME",
      couv: "		https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6065119/big.png?1655906315",
      pres: "La société de données pour le succès de la brandtech",
      pays: "France",
    },
    {
      nom: "ARMIS",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1381084/logo.png?1524830433",
      desc: "Start-up",
      couv: "https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/1580413/big.jpg?1534413572",
      pres: "Publicité multilocale",
      pays: "Canada",
    },
    {
      nom: "SICAM",
      logo: "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/81672308_1880397412258734_8404229710883586048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Diga8IQ0vMAAX_x3ci6&_nc_oc=AQmWGBzt_FosS2LAOD2c1blcD3lqA5gmvR42i62BXozoKRI7a8W0kRD11lKDxlAxXms&tn=INxv-GVDBNCJyBuy&_nc_ht=scontent.ftun16-1.fna&oh=00_AT9w8cMzsNi5r1v1L9tsGTcg3HI6K3u3xMw35Y_dZ1JYcw&oe=62E8853F",
      desc: "Entreprise Locale",
      couv: "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/288275018_2479465869018549_7453686335042026105_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4EeF34qTxdsAX_87D5S&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8uwsrWVfValugOIWzNRQHe_QcsQC9pneK9lLBdjWInQQ&oe=62C9D387",
      pres: "Société Industrielle des Conserves Alimentaires de Medjez el Bab",
      pays: "Tunisie",
    },
    {
      nom: "Gameloft",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/267860/logo.png?1646665832",
      desc: "Grande entreprise",
      couv: "https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6105349/big.png?1656935970",
      pres: "Développement et édition de jeux vidéo téléchargeables",
      pays: "France",
    },
    {
      nom: "Veolia",
      logo: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1613/logo.png?1541417697",
      desc: "Grande entreprise",
      couv: "	https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5557837/big.jpg?1645434130",
      pres: "référence mondiale des services à l’environnement ",
      pays: "Canada",
    },
  ]);
  const [demande, setdemande] = useState([
    {
      nom: "Selim Barka",
      niv: "Bac+2",
      domaine: "Informatique",
      msg: 'Bonjour, je suis ala recherche d"un stage de 2mois  ',
      photo:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFX1aK0egi1Zg/profile-displayphoto-shrink_200_200/0/1654723445428?e=1663804800&v=beta&t=q77x-XcpeKdthkMqusc4gfaE0fyeiS0yUCeZXiGJ80w",
      link: "https://www.linkedin.com/in/selim-barka/",
    },
  ]);
  return (
    <div className="App">
      <UserContext.Provider value={{ users, setusers }}>
        <Offrecontext.Provider value={{ offres, setoffres }}>
          <Entreprisescontext.Provider value={{ entreprises, setentreprises }}>
            <Demandecontext.Provider value={{ demande, setdemande }}>
              <MainRouter />
            </Demandecontext.Provider>
          </Entreprisescontext.Provider>
        </Offrecontext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
