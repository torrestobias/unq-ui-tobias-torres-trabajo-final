import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import Casa from "../imagenes/casa1.svg";
import "../css/Jugador2.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Jugador2 (){

    //Hooks Jugador 1
    const [seleccionJugador1, setSeleccionJugador1] = useState();  
    const [puntajeJugador1, setPuntajeJugador1] = useState(0);

    //Hooks Jugador 2
    const [seleccionJugador2, setSeleccionJugador2] = useState();
    const [puntajeJugador2, setPuntajeJugador2] = useState(0);

    
    const [resultado, setResultado] = useState();

   function evaluarPartida2(eleccionJugador1,eleccionJugador2){
       //Piedra
        if(( eleccionJugador1=== "Piedra") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Lagarto"))){
            setPuntajeJugador1(puntajeJugador1 + 1);
            setResultado("Gano Jugador 1");
        }

        if(eleccionJugador1=== eleccionJugador2){
            setResultado("Empate");
        }

        if(( eleccionJugador1=== "Piedra") && ((eleccionJugador2 ==="Papel") || (eleccionJugador2 === "Spock"))){
            
            setResultado("Perdiste");
        }

        //Papel

        if((eleccionJugador1=== "Papel") && ((eleccionJugador2 === "Piedra") || (eleccionJugador2 === "Spock"))){
            
            setResultado("Ganaste");
        }

        if((eleccionJugador1=== "Papel") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Lagarto"))){
            
            setResultado("Perdiste");
        }

        //Tijera
        
        if((eleccionJugador1=== "Tijera") && ((eleccionJugador2 === "Papel") || (eleccionJugador2 === "Lagarto"))){
            
            setResultado("Ganaste");
        }

        if((eleccionJugador1=== "Tijera") && ((eleccionJugador2 === "Piedra") || (eleccionJugador2 === "Spock"))){
           
            setResultado("Perdiste");
        }

        //Lagarto

        if((eleccionJugador1=== "Lagarto") && ((eleccionJugador2 === "Papel") || (eleccionJugador2 === "Spock"))){
            
            setResultado("Ganaste");
        }

        if((eleccionJugador1=== "Lagarto") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Piedra"))){
            
            setResultado("Perdiste");
        }

        //Spock

        if((eleccionJugador1=== "Spock") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Piedra"))){
           
            setResultado("Ganaste");
        }

        if((eleccionJugador1=== "Spock") && ((eleccionJugador2 === "Lagarto") || (eleccionJugador2 === "Papel"))){
            

            setResultado("Perdiste");
        }


    }

    function jugarJugador1(eleccionJugador1){
        setSeleccionJugador1(eleccionJugador1)
    }

    function jugarJugador2(eleccionJugador2){
        setSeleccionJugador2(eleccionJugador2)
    }


    function JugarDeADos(eleccionJugador1,eleccionJugador2){
       
        jugarJugador1(eleccionJugador1);
        jugarJugador2(eleccionJugador2);
        evaluarPartida2(eleccionJugador1,eleccionJugador2);
      
   }

  
    return (
        <div className="divClass ">
            <Navbar/>
                <div className="container">
                            <div className="row">
                            <div className="puntos-jugadores">  
                                <div>
                                    Pts Jugador 1: {puntajeJugador1}
                                </div>
                                <div>
                                    Pts Jugador 2: {puntajeJugador2}
                                </div>
                            </div>
                            </div>
                        <div className="container-block">
                            <div className="contenedor-botones">
                                <button className="boton-img1 teal accent-2" onClick={() => {jugarJugador1("Piedra")}}><img src={Piedra} className="botones1" width="100" height="100"/> </button>
                                <button className="boton-img2 lime lighten-1" onClick={() => {jugarJugador1("Papel")}}><img src={Papel} className="botones2" width="100" height="100"/> </button>
                                <button className="boton-img3 white" onClick={() => {jugarJugador1("Tijera")}}><img src={Tijera} className="botones3" width="100" height="100"/> </button>
                                <button className="boton-img4 blue darken-1" onClick={() => {jugarJugador1("Lagarto")}}><img src={Lagarto} className="botones4" width="100" height="100"/> </button>
                                <button className="boton-img5 red" onClick={() => {jugarJugador1("Spock")}}><img src={Spock} className="botones5" width="100" height="100"/> </button>
                            </div>
                        </div>
                        <div className="container-block">
                            <div className="contenedor-botones">
                                <button className="boton-img1 teal accent-2" onClick={() => {jugarJugador2("Piedra")}}><img src={Piedra} className="botones1" width="100" height="100"/> </button>
                                <button className="boton-img2 lime lighten-1" onClick={() => {jugarJugador2("Papel")}}><img src={Papel} className="botones2" width="100" height="100"/> </button>
                                <button className="boton-img3 white" onClick={() => {jugarJugador2("Tijera")}}><img src={Tijera} className="botones3" width="100" height="100"/> </button>
                                <button className="boton-img4 blue darken-1" onClick={() => {jugarJugador2("Lagarto")}}><img src={Lagarto} className="botones4" width="100" height="100"/> </button>
                                <button className="boton-img5 red" onClick={() => {jugarJugador2("Spock")}}><img src={Spock} className="botones5" width="100" height="100"/> </button>
                            </div>
                        </div>
                        <div className="row">
                                <div className="elecciones-jugadores">
                                    <div sm={2}>
                                        Jugador 1 Eligio: {seleccionJugador1}
                                    </div>
                                    <div sm={3}>
                                        Jugador 2 Eligio: {seleccionJugador2}
                                    </div>
                                </div>
                            </div>
                        <div className="container-block"> 
                            <div className="resultado">
                                {resultado}
                            </div>
                        </div>
                        <div className="row">
                            <div className="main-menu">
                                <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="60"/></button></Link>
                            </div>
                            
                        </div>
                        
                </div>
        </div>
    )

}

export default Jugador2;