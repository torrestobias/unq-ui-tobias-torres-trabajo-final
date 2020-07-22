import React , {useState} from 'react';
import Navbar from "./Navbar";
import Icono from "../iconos/icono.svg";
import "../css/Juego.css";
import {Link} from "react-router-dom";


function Juego(){


    return(
        <div className="Juego">
        <Navbar />
        <div className="juego-container">
          <div className="menu-principal container">

              <div className="row">
                
                <div><img src={Icono} className="icono-menu" width="50" /><p className="titulo-juego">Piedra, Papel, Tijera, Lagarto, Spock </p><img src={Icono} className="icono-menu" width="50" /></div>
              </div>
              <div className="row">
                  <div className="un-jugador">
                      <Link className="btn-small black" to="/jugador1">1 Jugador</Link>
                  </div>

                  <div className="dos-jugadores">
                      <Link className="btn-small black" to="/jugador2">2 Jugadores</Link>
                  </div>
                  
                  <div className="reglas">
                      <Link className="btn-small black" to="/reglas">Reglas</Link>
                  </div>
                  
          </div>
        </div>
        </div>
        
      </div>
    )
}

export default Juego;