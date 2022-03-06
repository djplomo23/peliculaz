import { Card } from "Component/Card";
import { useEffect, useState } from "react";

export const PelisDetails = ({ data, modal }) => {
  const [peliPlay, setPeliPlay] = useState(data.pelisLink.netu);
  useEffect(() => {
    setPeliPlay(data.pelisLink.netu);
  }, [data]);



  /* useEffect(() => {
    !modal && setPeliPlay("");
  }, [modal]);*/

  return (
    <div style={{ display: modal ? "grid" : "hidden" }} className="container">
      <div className="imgPelis">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="detail">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul>
          <li>
            <span>Título original</span>
            {data.info.origialTitle}
          </li>
          <li>
            <span>Año</span>
            {data.years}
          </li>
          <li>
            <span>Tiempo</span>
            {data.time}
          </li>
          <li>
            <span>Director </span>
            {data.info.director}
          </li>
          <li>
            <span>Géneros </span>
            {data.info.generos}
          </li>
          <li>
            <span>Actores </span>
            {data.info.actores}
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
              peliPlay === data.pelisLink.netu
                ? "btn-single-full"
                : "btn-single"
            }
            onClick={() => setPeliPlay(data.pelisLink.netu)}
          >
            Netu
          </button>
          <button
            className={
              peliPlay === data.pelisLink.zplayer
                ? "btn-single-full"
                : "btn-single"
            }
            onClick={() => setPeliPlay(data.pelisLink.zplayer)}
          >
            zplayer
          </button>
        </div>
        <iframe
          title={data.title}
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
