import React , {useState} from 'react';
import Navbar from "./Navbar";
import Icono from "../iconos/icono.svg";
import "../css/Juego.css";


function Juego(){


    return(
        <div className="Juego">
        <Navbar />
        <div className="menu-principal">
            <img src={Icono} className="icono-menu" />
            <div className="row">
              <a class="waves-effect waves-light btn-large"><i className="material-icons left">face</i>Player 1</a>
              <a class="waves-effect waves-light btn-large"><i className="material-icons left">face</i><i className="material-icons left">face</i>Player 2</a>
            </div>
        </div>
        
      </div>
    )
}

export default Juego;