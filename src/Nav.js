import React from 'react'
import { Link } from 'react-router-dom'
import  Taswira from './Sans-titre---1.png'
import {useState} from 'react';




export default function Nav() {
  const [nav,setNav]= useState(false);
  const chandeBackground =()=>{
    if (window.scrollY>=600){
    
    setNav(true)
    }else {setNav(false)}
    };
    

    window.addEventListener('scroll',chandeBackground);
  return (
    <div>
       <nav className={nav ? 'nav active' : 'nav' } >
  <img src={Taswira} width={170} height={70} />
  <button id="burger" className="nav__burger-button">
    <div className="nav__burger">
      <div className="nav__burger-inner" />
    </div>
  </button>
  <ul className="nav__link-wrapper">
  <li className="nav__link">
        <Link to='/'>Acceuil</Link>
    </li>
    <li className="nav__link">
        <Link to='/Stage'>Stage</Link>
    </li>
    <li className="nav__link"><Link to='/Entreprise'>Entreprises</Link></li>
    <li className="nav__link"><Link to='/Conseil'>Conseils</Link></li>
    <li className="nav__link"><Link to='/Connecter'>Connecter</Link></li>
  </ul>
</nav>

    </div>
  )
}
