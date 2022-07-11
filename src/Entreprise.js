import scss from "./entreprise.module.scss";
import Offresentreprises from "./Offresentreprises";
import { useNavigate } from "react-router-dom";
import Partie5 from "./Partie5";
import Nav from "./Nav";

export default function Entreprise() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className={scss?.nav}></div>
      <div className={scss?.container}>
        <div className={scss?.back}>
          <h1 className={scss?.title}>Les Entreprises</h1>
          <div className={scss?.btns}>
            <button
              className={scss?.btn}
              onClick={() => navigate("/Entreprise")}
            >
              Tous
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesTunisie")}
            >
              Tunisie
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesFrance")}
            >
              France
            </button>
            <button
              className={scss?.btn}
              onClick={() => navigate("/EntreprisesCanada")}
            >
              Canada
            </button>
          </div>
        </div>

        <div className={scss?.offres}>
          <Offresentreprises />
        </div>
        <div>
          <Partie5 />
        </div>
      </div>
    </div>
  );
}
