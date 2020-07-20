import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import DisplayImage from "./DisplayImage";
import Navbar from "./Navbar";

function Jugador1 (){

    const [seleccionJugador, setSeleccionJugador] = useState(null);  

    const [seleccionComputadora, setSeleccionComputadora] = useState(null);

    const eleccionesPosiblesDeComputadora = [Piedra, Papel, Tijera, Lagarto, Spock];

    const numeroAleatorio = [1,2,3,4,5];

    var randomNumber = Math.floor(Math.random() * numeroAleatorio.length); 

    var eleccion = eleccionesPosiblesDeComputadora[randomNumber];

    function funcionRica(){
        setSeleccionJugador(null)
        setSeleccionComputadora(null)
    }

    

    return (
        <div className="divBar">
            <Navbar />
            <div className="botones">
                <div className="row">   
                    <h3>Elegiste a: {seleccionJugador}</h3>
                </div>
                <div className="row">
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Piedra}/>)}}>Piedra</a>
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Papel}/>)}}>Papel</a>
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Tijera}/>)}}>Tijera</a>
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Lagarto}/>)} }>Lagarto</a>
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionJugador(<DisplayImage pathImage={Spock}/>)}}>Spock</a>
                </div>
                <div className="row">   
                    <h4>La computadora eligio: {seleccionComputadora} </h4>
                    <a class="waves-effect waves-light btn-small" onClick={() => {setSeleccionComputadora(<DisplayImage pathImage={eleccion}/>)}}>Jugar</a>
                </div>
                <a class="waves-effect waves-light btn-small" onClick={() => {funcionRica()}}>Volver a Jugar</a>
            </div>
        </div>
    )

}

export default Jugador1;