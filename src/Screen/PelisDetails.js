

import { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import {data} from 'dataBd/data'

export const PelisDetails = () => {
  const [peliPlay, setPeliPlay] = useState('');
 

  const params = useParams()



  const datas = data?.find(peli =>  peli.id == params.id && peli)

useEffect(() => {
    setPeliPlay(datas.pelisLink.netu);
  }, [datas]);

  useEffect(() => {
    
      window.scrollTo(0, 0)

  }, [])


  /* useEffect(() => {
    !modal && setPeliPlay("");
  }, [modal]);*/
 
  return ( datas &&
    <div  className="container">
      <div className="imgPelis">
        <img src={datas.image} alt={datas.title} />
      </div>
      <div className="detail">
        <h1>{datas.title}</h1>
        <p>{datas.description}</p>
        <ul>
          <li>
            <span>Título original</span>
            {datas.info.origialTitle}
          </li>
          <li>
            <span>Año</span>
            {datas.years}
          </li>
          <li>
            <span>Tiempo</span>
            {data.time}
          </li>
          <li>
            <span>Director </span>
            {datas.info.director}
          </li>
          <li>
            <span>Géneros </span>
            {datas.info.generos}
          </li>
          <li>
            <span>Actores </span>
            {datas.info.actores}
          </li>
        </ul>
      </div>

      <div className="warnning">
        <p>
          <span>WARNNING!!!</span> No necesitas descargar nada para visualizar
          las películas
        </p>
        
      </div>

      <div className="reproductor">
        <div className="btn">
          <button
            className={
              peliPlay === datas.pelisLink.netu
                ? "btn-single-full"
                : "btn-single"
            }
            onClick={() => setPeliPlay(datas.pelisLink.netu)}
          >
            Netu
          </button>
          <button
            className={
              peliPlay === datas.pelisLink.zplayer
                ? "btn-single-full"
                : "btn-single"
            }
            onClick={() => setPeliPlay(datas.pelisLink.zplayer)}
          >
            zplayer
          </button>
        </div>
        <iframe
          title={datas.title}
          className="video"
          src={peliPlay}
          height="315"
          width="560"
          webkitAllowFullScreen="true"
          mozallowfullscreen="true"
          allowfullscreen="true"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
            
      
      
    </div>
  );
};
