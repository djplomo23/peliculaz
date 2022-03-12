import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Card = ({ pelis}) => {


  function quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString().replace(/ /g, '-').replace(/:/g, ''); 
   }


   const titleEdict = quitarAcentos(pelis.pelis.title)


   const CardAnimate = gsap.timeline()
   const cardOpaciti = useRef(null)

   useEffect(() => {
    CardAnimate.from(cardOpaciti.current, {
      duration: .8,
      scale: 0,
      opacity: 0
    });
  }, [])
  
  
  return ( pelis &&
    <div ref={cardOpaciti} className="card">
      <Link to={`/pelicula=${titleEdict}/id=${pelis.pelis.id}`}>
        <img
          loading="lazy"
          src={pelis.pelis.image}
          alt="Avatar"
        />
      </Link>
      <div className="container"></div>
    </div>
  );
};
