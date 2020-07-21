import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import DisplayImage from "./DisplayImage";
import Navbar from "./Navbar";

function Jugador1 (){

    const [seleccionJugador, setSeleccionJugador] = useState();  

    const [seleccionComputadora, setSeleccionComputadora] = useState();

    const [eleccionJugadorString, setEleccionJugadorString] = useState();

    const [eleccionComputadoraString, setEleccionComputadoraString] = useState("");


    const [sePuedeJugar, setSePuedeJugar] = useState(true);

    const [ganador, setGanador] = useState("");


    const eleccionesPosiblesDeComputadora = [Piedra, Papel, Tijera, Lagarto, Spock];

    

    const numeroAleatorio = [1,2,3,4,5];

    var randomNumber = Math.floor(Math.random() * numeroAleatorio.length); 

    var eleccion = eleccionesPosiblesDeComputadora[randomNumber];

    function reinicioElecciones(){
        setSeleccionJugador(null);
        setSeleccionComputadora(null);
        setSePuedeJugar(true);
        setGanador(null);
    }

    function inicioDeJuegoRico(){
        if(sePuedeJugar){
            setSeleccionComputadora(<DisplayImage pathImage={Tijera}/>);

            setEleccionComputadoraString("Tijera");

            console.log("hi", eleccionComputadoraString);
            ganadorDePartidaRica();

            setSePuedeJugar(false);
        }
    }

    function ganadorDePartidaRica(){
        if(eleccionJugadorString === "Piedra"){
           if(eleccionComputadoraString === "Tijera"){
            setGanador("Ganaste");
           }
        }
    }

    function conversor(piedraImagen, piedraString){
        setSeleccionJugador(piedraImagen)
        setEleccionJugadorString(piedraString)
    }

    return (
        <div className="divBar">
            <div className="botones">
                <div className="row">  
                    <h3>Elegiste a: {seleccionJugador}</h3>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn-small" onClick={() => {conversor(<DisplayImage pathImage={Piedra}/>,"Piedra")}}>Piedra</a>
                    <a className="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Papel}/>)}}>Papel</a>
                    <a className="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Tijera}/>)}}>Tijera</a>
                    <a className="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Lagarto}/>)} }>Lagarto</a>
                    <a className="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Spock}/>)}}>Spock</a>
                </div>
                <div className="row">
                    <h4>La computadora eligio: {seleccionComputadora} </h4>
                    <a className="waves-effect waves-light btn-small" onClick={() => {inicioDeJuegoRico()}}>Jugar</a>
                </div>
                <div className="row"> 
                    <h4>El Resultado es: {ganador}</h4>
                </div>
                <div className="row"> 
                    <a className="waves-effect waves-light btn-small" onClick={() => {reinicioElecciones()}}>Volver a Jugar</a>
                </div>


            </div>
        </div>
    )

}

export default Jugador1;