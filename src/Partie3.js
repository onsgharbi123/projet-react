import React from 'react'
import Scss from './Partie3.module.scss' 

export default function Partie3() {
  return (
    <div className={Scss?.container}>
        <div className={Scss?.cadre}>
            <h3>Condidats</h3>
            <p className={Scss?.lance}>Lancez-vous</p>
            <button className={Scss?.bout}>Publier votre CV</button>
        </div>
        <div className={Scss?.cadre}><h3>Recruteurs</h3>
        <p className={Scss?.annonce}>Recrutez les jeunes talents qui feront le succès de votre entreprise</p>
        <button className={Scss?.bout2}>Diffuser une annonce</button>
        </div>
    </div>
  )
}
