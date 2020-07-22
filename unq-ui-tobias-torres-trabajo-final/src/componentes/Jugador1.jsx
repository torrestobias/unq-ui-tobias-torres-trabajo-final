import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import Casa from "../imagenes/casa1.svg";
import "../css/Jugador1.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Jugador1 (){

    //Hooks Jugador
    const [seleccionJugador, setSeleccionJugador] = useState();  
    const [puntajeJugador, setPuntajeJugador] = useState(0);

    //Hooks Computadora
    const [seleccionComputadora, setSeleccionComputadora] = useState();
    const [puntajeComputadora, setPuntajeComputadora] = useState(0);

    
    const [resultado, setResultado] = useState();

    const eleccionesPosiblesDeComputadora = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

    let randomNumber = Math.floor(Math.random() * eleccionesPosiblesDeComputadora.length); 

    let eleccionComputadora = eleccionesPosiblesDeComputadora[randomNumber];

   function evaluarPartida(eleccionJugador,eleccionComputadora){
       //Piedra
        if(( eleccionJugador === "Piedra") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Lagarto"))){
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }

        if(eleccionJugador === eleccionComputadora){
            setResultado("Empate");
        }

        if(( eleccionJugador === "Piedra") && ((eleccionComputadora ==="Papel") || (eleccionComputadora === "Spock"))){
            setPuntajeComputadora(puntajeComputadora + 1);
            setResultado("Perdiste");
        }

        //Papel

        if((eleccionJugador === "Papel") && ((eleccionComputadora === "Piedra") || (eleccionComputadora === "Spock"))){
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }

        if((eleccionJugador === "Papel") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Lagarto"))){
            setPuntajeComputadora(puntajeComputadora + 1);
            setResultado("Perdiste");
        }

        //Tijera
        
        if((eleccionJugador === "Tijera") && ((eleccionComputadora === "Papel") || (eleccionComputadora === "Lagarto"))){
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }

        if((eleccionJugador === "Tijera") && ((eleccionComputadora === "Piedra") || (eleccionComputadora === "Spock"))){
            setPuntajeComputadora(puntajeComputadora + 1);
            setResultado("Perdiste");
        }

        //Lagarto

        if((eleccionJugador === "Lagarto") && ((eleccionComputadora === "Papel") || (eleccionComputadora === "Spock"))){
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }

        if((eleccionJugador === "Lagarto") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Piedra"))){
            setPuntajeComputadora(puntajeComputadora + 1);
            setResultado("Perdiste");
        }

        //Spock

        if((eleccionJugador === "Spock") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Piedra"))){
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }

        if((eleccionJugador === "Spock") && ((eleccionComputadora === "Lagarto") || (eleccionComputadora === "Papel"))){
            setPuntajeComputadora(puntajeComputadora + 1);

            setResultado("Perdiste");
        }


    }

    function Jugar(eleccionJugador){
       
        setSeleccionJugador(eleccionJugador);
        setSeleccionComputadora(eleccionComputadora);
        evaluarPartida(eleccionJugador,eleccionComputadora);
      
   }
  
    function reinicioJuego(){
        setSeleccionJugador(null);
        setSeleccionComputadora(null);
        setResultado(null);
        setPuntajeComputadora(0);
        setPuntajeJugador(0);
    }

    return (
        <div className="divClass ">
            <Navbar/>
                <div className="container">
                            <div className="row">
                            <div className="puntos-jugadores">  
                                <div>
                                    Pts Jugador: {puntajeJugador}
                                </div>
                                <div>
                                    Pts Cpu: {puntajeComputadora}
                                </div>
                            </div>
                            </div>
                        <div className="container-block">
                            <div className="contenedor-botones">
                                <button className="boton-img1 teal accent-2" onClick={() => {Jugar("Piedra")}}><img src={Piedra} className="botones1" width="100" height="100"/> </button>
                                <button className="boton-img2 lime lighten-1" onClick={() => {Jugar("Papel")}}><img src={Papel} className="botones2" width="100" height="100"/> </button>
                                <button className="boton-img3 white" onClick={() => {Jugar("Tijera")}}><img src={Tijera} className="botones3" width="100" height="100"/> </button>
                                <button className="boton-img4 blue darken-1" onClick={() => {Jugar("Lagarto")}}><img src={Lagarto} className="botones4" width="100" height="100"/> </button>
                                <button className="boton-img5 red" onClick={() => {Jugar("Spock")}}><img src={Spock} className="botones5" width="100" height="100"/> </button>
                            </div>
                        </div>
                        <div className="row">
                                <div className="elecciones-jugadores">
                                    <div sm={2}>
                                        Elegiste: {seleccionJugador}
                                    </div>
                                    <div sm={3}>
                                        Cpu eligio: {seleccionComputadora}
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

export default Jugador1;