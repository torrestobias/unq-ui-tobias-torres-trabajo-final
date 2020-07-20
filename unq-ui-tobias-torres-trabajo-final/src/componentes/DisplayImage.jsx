import React from 'react';

function DisplayImage ({pathImage},heightImagen, widthImagen){
    return(
        <img src={pathImage} height={heightImagen} width={widthImagen}/>
    )
}

export default DisplayImage;