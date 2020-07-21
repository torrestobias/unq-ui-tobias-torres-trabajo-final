import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import "../css/Jugador1.css";
import Navbar from "./Navbar";

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
        console.log(seleccionComputadora);
        console.log(seleccionJugador);
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
        <div className="divClass">
            <Navbar/>
                <div className="container">
                            <div className="row">
                            <div className="puntos-jugadores">  
                                <div sm={2}>
                                    Pts Jugador : {puntajeJugador}
                                </div>
                                <div sm={2}>
                                    Pts Cpu: {puntajeComputadora}
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="elecciones-jugadores">
                                    <div sm={2}>
                                        Elegiste a: {seleccionJugador}
                                    </div>
                                    <div sm={3}>
                                        La cpu eligio: {seleccionComputadora}
                                    </div>
                                </div>
                            </div>

                        <div className="container-block">
                            <div className="contenedor-botones">
                                <button className="boton-img" onClick={() => {Jugar("Piedra")}}><img src={Piedra} className="botones" width="100" height="100"/> </button>
                                <button className="boton-img" onClick={() => {Jugar("Papel")}}><img src={Papel} className="botones" width="100" height="100"/> </button>
                                <button className="boton-img" onClick={() => {Jugar("Tijera")}}><img src={Tijera} className="botones" width="100" height="100"/> </button>
                                <button className="boton-img" onClick={() => {Jugar("Lagarto")}}><img src={Lagarto} className="botones" width="100" height="100"/> </button>
                                <button className="boton-img" onClick={() => {Jugar("Spock")}}><img src={Spock} className="botones" width="100" height="100"/> </button>
                            </div>
                        </div>
                        <div className="container-block"> 
                            <div className="resultado">
                                El Resultado es: {resultado}
                            </div>
                        </div>
                        <div className="row">
                            <div className="reinicio-juego"> 
                                <button className="waves-effect waves-light btn-small" onClick={() => {reinicioJuego()}}>Reiniciar Juego</button>
                            </div>
                        </div>
                        
                </div>
        </div>
    )

}

export default Jugador1;