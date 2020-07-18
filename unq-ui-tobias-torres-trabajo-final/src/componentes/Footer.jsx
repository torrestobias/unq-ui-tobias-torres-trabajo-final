import React from 'react';


function Footer(){
    return(
        <div className="main-footer">
            
            <div className="row">
                <p className="col-sm">
                   
                    &copy;{new Date().getFullYear()} TP FINAL INTERFACES DE USUARIO | All right reserved | Terms Of Service 
                    
                </p>
                
            </div>
        </div>
    )
}

export default Footer;