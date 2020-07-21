import React from 'react';
import "../css/Navbar.css";
import icono from '../iconos/icono.svg';


function Navbar(){

    return(
        
        <div className= "container-block">
            <div>
                <header className= "header">
                <div sm={6}><img className="imagen-header-lg" src={icono} width="100" /></div>

                <div sm={6}><p className="titulo">  PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK</p> </div>

                <div sm={6}><img className="imagen-header-lg" src={icono} width="100" /></div>
            </header>
            </div>                
         </div>
       
       
    )
}

export default Navbar;