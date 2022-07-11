import React from "react";
import ss from "./Ajoutdemande.module.scss";
import Sign from "./Sign";
import Nav from "./Nav";
export default function Ajoutdemande() {
  return (
    <div>
      <Nav />
      <div className={ss?.back}>
        <div className={ss?.order}>
          <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <h4 className="card-title mt-3 text-center">Déposez Votre CV</h4>
              <p className={ss?.dividertext}>
                <span className="bg-light"></span>
              </p>
              <Sign />
            </article>
          </div>
          <div className={ss?.hhhh}>
            <div className={ss?.a}>
              <p>Je télécharge mon CV</p>
              <div>
                <p>Doc, Docx, rtf, pdf (3 Mo. max)</p>
              </div>
            </div>

            <div className={ss?.aa}>
              <input
                type="file"
                name="cv"
                accept=".doc,.docx,.rtf,.pdf"
                aria-label="CV"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
