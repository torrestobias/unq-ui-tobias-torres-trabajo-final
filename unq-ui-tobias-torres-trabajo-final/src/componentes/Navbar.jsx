import React from 'react';
import "../css/Navbar.css";
import Icono from "../iconos/icono.svg";

function Navbar(){

    return(
        
        <nav>
            <div class="nav-wrapper">
                <img src={Icono} className="icono-menu-app" />
            </div>
        </nav>
       
       
    )
}

export default Navbar;