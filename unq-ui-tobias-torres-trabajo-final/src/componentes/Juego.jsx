import React , {useState} from 'react';
import Navbar from "./Navbar";
import Icono from "../iconos/icono.svg";
import "../css/Juego.css";
import {Link} from "react-router-dom";


function Juego(){


    return(
        <div className="Juego">
        <Navbar />
        <div className="juego-container col s4">
        <div className="menu-principal container">

            <div className="row">
              <img src={Icono} className="icono-menu" />
            </div>
            <div className="row">
              <Link className="waves-effect waves-light btn-large" to="/jugador1"><i className="material-icons left">face</i>1 Jugador</Link>
              <Link class="waves-effect waves-light btn-large"><i className="material-icons left">face</i><i className="material-icons left">face</i>2 Jugadores</Link>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Juego;