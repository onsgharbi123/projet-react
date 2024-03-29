import React from "react";
import sss from "./Conseil.module.scss";
import Nav from "./Nav";
import Partie5 from "./Partie5";

export default function Conseil() {
  return (
    <div>
      <Nav />
      <div className={sss?.imgg}>
        <div className={sss?.text14}>Astuce et Conseil</div>
        <div className={sss?.text15}>
          Comment avoir une démarche de candidature efficace ?
        </div>

        <div className={sss?.text16}>
          Voici quelques conseils pour vous accompagner dans vos recherches !
        </div>
      </div>
      <div>
        <div className={sss?.text1}>
          Découvrez les meilleures astuces pour trouvez un stage{" "}
        </div>
        <div className={sss?.text2}>
          Reechercher une mission en entreprise est une chose, connaître et
          comprendre les codes du recrutement en est une autre. (elesm) vous
          apporte de nombreux conseils pour aborder au mieux votre futur poste :
          écrire une lettre de motivation, créer un CV, s'entraîner à un
          entretien en visio..
        </div>

        <div class={sss?.back2}>
          <div className={sss?.text4}>
            <p>Réussir un CV </p>
          </div>
          <div className={sss?.text4}>
            <p>developper son réseau</p>
          </div>
          <div className={sss?.text4}>
            <p>Préparation de l'entretien</p>
          </div>
          <div className={sss?.text4}>
            <p>Explorer le marché</p>
          </div>
          <div className={sss?.text4}>
            <p>Inspiration</p>
          </div>
          <div className={sss?.text4}>
            <p>Motivation</p>
          </div>
        </div>
      </div>

      <div>
        <div className={sss?.back4}>
          <div className={sss?.back5}>
            <div className={sss?.back6}>
              <div className={sss?.back7}>
                <div>
                  <p className={sss?.text5}>
                    Conseils pour réussir un CV simple
                  </p>
                  <p className={sss?.text6}>-Choisir son modèle de CV</p>
                  <p className={sss?.text7}>
                    {" "}
                    -Utiliser une police de caractère lisible
                  </p>
                  <p className={sss?.text7}>
                    -Remplir les rubriques obligatoires
                  </p>
                </div>

                <div className=" ">
                  <img
                    src="https://static.iquesta.com/images/iquesta/article/banner/135.jpg"
                    className={sss?.img1}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className={sss?.back7}>
            <div className={sss?.back8}>
              <img
                src="https://static.iquesta.com/images/iquesta/article/banner/140.jpg"
                className={sss?.img2}
              ></img>
              <div className={sss?.text8}>
                {" "}
                Il n'est jamais trop tôt pour développer son réseau
              </div>
              <div>
                <p className={sss?.text9}>-Adapter son profil</p>
                <p className={sss?.text9}>
                  {" "}
                  -Aller à la rencontre des autres, faire preuve de curiosité
                </p>
                <p className={sss?.text9}>-Privilégier la qualité</p>
                <p className={sss?.text9}>-Entretenir son réseau</p>
              </div>
            </div>

            <div className={sss?.back9}>
              <img
                src="https://static.iquesta.com/images/iquesta/article/banner/139.jpg"
                className={sss?.img3}
              ></img>
              <div className={sss?.back10}> Réussir son 1er entretien</div>
              <div>
                <p className={sss?.text10}>-Connaître l'entreprise</p>
                <p className={sss?.text10}>-Se projeter dans le poste</p>
                <p className={sss?.text10}>
                  -Se préparer aux questions-types des recruteurs
                </p>
                <p className={sss?.text10}>
                  -Formaliser une liste de questions
                </p>

                <p className={sss?.text10}>-Entraînement</p>
              </div>
            </div>

            <div className={sss?.back11}>
              <img
                src="https://static.iquesta.com/images/iquesta/article/banner/142.jpg"
                className={sss?.img4}
              ></img>
              <div className={sss?.back10}> Explorer le marché</div>
              <div>
                <p className={sss?.text10}>
                  -Aventure en freelance ou expérience dans un grand groupe
                  international
                </p>
                <p className={sss?.text10}> -Les métiers de demain</p>
                <p className={sss?.text10}>-Découvrir un secteur d’activité</p>
                <p className={sss?.text10}>
                  -S’ADAPTER À UN MARCHÉ EN ÉVOLUTION
                </p>

                <p className={sss?.text10}>
                  -L’ESSENTIEL À RETENIR d'éviter les erreurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partie5 />
    </div>
  );
}
