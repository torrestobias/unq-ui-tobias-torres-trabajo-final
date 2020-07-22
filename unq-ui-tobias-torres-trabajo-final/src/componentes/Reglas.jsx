import React from 'react';
import ReglasJuego from '../imagenes/reglas.png';
import Navbar from './Navbar';
import Icono from "../iconos/icono.svg";
import '../css/Reglas.css'; 
import { Link } from 'react-router-dom';
import Casa from "../imagenes/casa1.svg";

function Reglas (){
    return(
        <div>
            <Navbar/>
            <div className="reglas-div">                    
                    <div className="reglas-juego row">
                        <div className="row col m12 center">
                            <div className="col s4">
                                <img className="right" src={Icono} width="70" />
                            </div>
                            <div className="col s4">
                            <p className="titulo-reglas center">REGLAS </p> 
                            </div>
                            <div className="col s4">
                                <img className="left" src={Icono} width="70" />
                            </div>

                        </div>
                        <div className="row col s12 center">
                            <img src={ReglasJuego} width="440" height="352" />
                        </div>               
                    </div>
                    <div className="main-menu">
                        <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="60"/></button></Link>
                    </div>
            </div>
        </div>
    
    )
}

export default Reglas;