import React from 'react';

function Banner (props) {
    return (
      <div className={props.className}>
        <img className="banner__img" src={props.image} alt={props.alt} />

        {/* Overlay foncé */}
      <div className="banner-overlay"></div>

      {/* Contenu par-dessus (texte) */}
        {props.children}
        
      </div>  
    );
}
  
export default Banner;