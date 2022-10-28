import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Card = ({ pelis}) => {


  function quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString().replace(/ /g, '-').replace(/:/g, ''); 
   }


   const titleEdict = quitarAcentos(pelis.pelis.title)

   
   
   const cardOpaciti = useRef(null)
   let CardAnimate
  
   useEffect(() => {
     CardAnimate = gsap.timeline({defaults: {
      duration: 2.5, 
      ease: "elastic.out(1, 0.3)"
    }})
  }, [])


   useEffect(() => {
   
    CardAnimate.set(cardOpaciti.current, {
      scale: 0.0000001,
      
    });
    
    CardAnimate.to(cardOpaciti.current, {
      scale: 1,
      
    }, "<");
  }, [])
  
  
  return ( pelis &&
    <div ref={cardOpaciti} className="card">
      <Link to={`/pelicula=${titleEdict}/id=${pelis.pelis.id}`}>
        <img
          loading="lazy"
          src={pelis.pelis.image.url}
          alt="Avatar"
        />
      </Link>
      <div className="container"></div>
    </div>
  );
};
